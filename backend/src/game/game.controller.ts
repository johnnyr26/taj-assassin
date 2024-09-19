import { Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import { GameService } from './game.service';
import { getUserIdFromRequest } from 'utils/request';
import { Request } from 'express';
import { JwtAuthGuard } from 'auth/guards';
import { MongoId } from 'utils/mongo';
import { ConfigService } from '@nestjs/config';

import { GameInfo } from 'shared/api/game';
import { PlayerService } from './player/player.service';
import { PlayerRole } from './player/player.schema';
import { QueryRequired } from 'utils/decorators';

@Controller('game')
export class GameController {
  constructor(
    private gme: GameService,
    private cfg: ConfigService,
    private plyr: PlayerService,
  ) {}

  @Post('submitSafety')
  @UseGuards(JwtAuthGuard)
  async submitSafety(
    @QueryRequired('gameId') gameIdQuery: string,
    @QueryRequired('safety') safety: string,
  ) {
    const gameId = new MongoId(gameIdQuery);
    await this.gme.submitSafety(gameId, safety);
  }

  @Get('getActive')
  @UseGuards(JwtAuthGuard)
  async register(@Req() req: Request): Promise<GameInfo> {
    // Register the requesting user for the active game
    const userId = getUserIdFromRequest(req);
    const gameId = new MongoId(this.cfg.get<string>('ACTIVE_GAME_ID'));
    let game = await this.gme.findById(gameId);

    // Fetch the user's role in a part of this game
    const role = await this.plyr.getRole(gameId, userId);
    const registered = role === PlayerRole.PLAYER;

    // Grab the list of events for this game, and convert the time to a standardized ISO string
    const events: { title: string; time: string }[] = [];
    if (game.events) {
      game.events.forEach((e) => {
        events.push({ title: e.title, time: e.time.toISOString() });
      });
    }

    // const now = new Date();
    // // When the first safety should be
    // const start = new Date(game.startTime.toISOString());

    // // Use this difference in order to index into the safeties array and display the correct ones
    // const diff = now.getTime() - start.getTime();
    // let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    // diffDays -= 1;

    // // Selects a random person for immunity.
    // if (diffDays === game.immunities.length) {
    //   await this.gme.grantImmunity(gameId, this.plyr);
    // }

    // // Selects a random person for kill deduction
    // if (diffDays === game.killDeductions.length) {
    //   await this.gme.deductKill(gameId, this.plyr);
    // }

    // Fetch game again with new immunity
    game = await this.gme.findById(gameId);

    return {
      gameId: gameId.toString(),
      registered,
      status: game.status,
      role: role,
      name: game.name,
      events: events,
      safeties: game.safeties,
      startTime: game.startTime.toISOString(),
      immunities: game.immunities,
      killDeductions: game.killDeductions,
    };
  }
}
