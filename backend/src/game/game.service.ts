import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Game } from './game.schema';
import { Model } from 'mongoose';
import { MongoId } from 'utils/mongo';
import { GameNotFoundException } from 'utils/exceptions';
import { UserService } from 'user/user.service';
import { PlayerService } from './player/player.service';

@Injectable()
export class GameService {
  constructor(
    @InjectModel(Game.name) private gameModel: Model<Game>,
    private usr: UserService,
  ) {}

  async create(name: string, whitelistedEmails: string[]): Promise<Game> {
    const game = new this.gameModel();
    game.name = name;
    game.whitelistedEmails = whitelistedEmails;
    return game.save();
  }

  async findById(gameId: MongoId): Promise<Game> {
    const query = await this.gameModel.find({ _id: gameId });
    if (query.length == 0) {
      throw new GameNotFoundException(gameId);
    }
    return query[0];
  }

  async grantImmunity(gameId: MongoId, plyr: PlayerService) {
    const alivePlayers = await plyr.findAlivePlayers(gameId);
    if (alivePlayers && alivePlayers.length > 0) {
      const randomIndex = Math.floor(Math.random() * alivePlayers.length);
      const randomPlayer = alivePlayers[randomIndex];
      const randomPlayerId = new MongoId(randomPlayer.userId.toString());
      const randomUser = await this.usr.findById(randomPlayerId);

      // Find the game
      const game = await this.findById(gameId);

      // Append the randomPlayer to the immunities list
      game.immunities = game.immunities || []; // Ensure immunities exists
      game.immunities.push(`${randomUser.firstName} ${randomUser.surname}`);

      // Save the updated game model
      await this.gameModel.updateOne(
        { _id: gameId },
        { $set: { immunities: game.immunities } },
      );
    }
  }

  async deductKill(gameId: MongoId, plyr) {
    const alivePlayers = await plyr.findAlivePlayers(gameId);
    if (alivePlayers && alivePlayers.length > 0) {
      const randomIndex = Math.floor(Math.random() * alivePlayers.length);
      const randomPlayer = alivePlayers[randomIndex];
      const randomPlayerId = new MongoId(randomPlayer.userId.toString());
      const randomUser = await this.usr.findById(randomPlayerId);

      // Find the game
      const game = await this.findById(gameId);

      // Append the randomPlayer ID to the immunities list
      game.killDeductions = game.killDeductions || []; // Ensure immunities exists
      game.killDeductions.push(`${randomUser.firstName} ${randomUser.surname}`);

      // Save the updated game model
      await this.gameModel.updateOne(
        { _id: gameId },
        { $set: { killDeductions: game.killDeductions } },
      );
    }
  }
}
