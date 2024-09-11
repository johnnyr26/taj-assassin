import {
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Text,
  Stack,
  Card,
} from "@chakra-ui/react";

import { TimeIcon, ViewIcon } from "@chakra-ui/icons";

/**
 * Description of the rules and regulations of the game. Includes a few links
 * to a GroupMe, safe zones, safeties, etc.. This page is updated frequently
 * when there are new changes.
 */
function Rules() {
  return (
    <Stack alignItems="center">
      <Card
        variant="outline"
        boxShadow={"lg"}
        width="90%"
        minWidth="400px"
        padding={4}
        backgroundColor="yellow.100"
        display="flex"
        alignItems="center"
      >
        <Text fontWeight="extrabold">WARNING</Text>
        <Text fontWeight="normal" align="center">
          These rules are subject to slight changes, however changes will be
          announced{" "}
          <a href="https://groupme.com/join_group/103185270/HMdGgz2S">
            <Text display="inline" color="blue.400">
              in the GroupMe
            </Text>
          </a>{" "}
          as they arise throughout the course of the game.
        </Text>
      </Card>
      <UnorderedList maxWidth="500px">
        <ListItem fontWeight="bold">
          New Additions for 2024
          <UnorderedList fontWeight="normal">
            <ListItem>
              These new additions are only applicable for the{" "}
              <Text display="inline" fontWeight="bold">
                FIRST TWO
              </Text>{" "}
              rounds of the game.
              <UnorderedList fontWeight="normal">
                <ListItem>
                  <Text display="inline" fontWeight="bold">
                    The Cottage Guard:{" "}
                  </Text>
                  Each day, one lucky survivor will be randomly granted full
                  immunity, shielding them from elimination for a full 24 hours.
                  During this time, they are safe from any attempts
                  to remove them from the game. There's no need for them to
                  perform any special tasks or safety measures—this protection
                  is automatic. Despite their immunity, they can still eliminate
                  their target, continuing to play without fear. If your target
                  happens to be immune for the day, you will simply have to
                  wait—and watch—knowing they are just out of reach, while you
                  remain vulnerable, exposed, and at their mercy.
                </ListItem>
                <ListItem>
                  <Text display="inline" fontWeight="bold">
                    Tina's Spell:{" "}
                  </Text>
                  Despite Tina's mysterious absence from the game this year, the
                  harrowing echoes of the 2023 Taj Assassin Massacre still hang
                  like a shadow over the club. Every day, a single survivor is
                  selected at random, and one of their kills is mercilessly
                  erased. The dead remain undisturbed—trapped forever in their
                  cold silence. If the deduction caused the chosen person to
                  fall below the threshold necessary to advance to the next
                  round, they must claw their way back and make up for the
                  deduction. There is no escape, only the slow, creeping
                  realization that survival demands a price, one paid in fear,
                  desperation, and death.
                </ListItem>
              </UnorderedList>
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem fontWeight="bold">
          Getting someone "out"
          <UnorderedList fontWeight="normal">
            <ListItem>
              You must squirt them with water directly from a water gun. The
              mechanism of water delivery must be from a water gun. Other
              delivery methods, such as a water bottle or a cup of beer, do not
              count.
            </ListItem>
            <ListItem>
              The kill must be caught on video and uploaded to the GroupMe,
              linked{" "}
              <a href="https://groupme.com/join_group/103185270/HMdGgz2S">
                <Text display="inline" color="blue.400">
                  HERE
                </Text>
              </a>
              . You must include the full name of the person you have killed.
            </ListItem>
            <ListItem>
              If the kill is deemed valid, it will be registered here and will
              be displayed publically on the leaderboard.
            </ListItem>
            <ListItem>
              After a kill is registered, the target of the killed will be
              reassigned to that of whom they were killed by.
            </ListItem>
            <ListItem>
              Kills are only valid during rounds. That is, in between the end of
              a round and the start of the next, kills will not count. Kills
              must be sent in the GroupMe prior to the round ending, or they
              will not count.
            </ListItem>
            <ListItem>
              There are no shields. Holding a book up to protect yourself and
              "deflect" the water will still count as a kill.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem fontWeight="bold">
          Auto-elimination
          <UnorderedList fontWeight="normal">
            <ListItem>
              There are 3 rounds of auto-elimination (rounds 1, 2, and 3), where
              players must have a certain number of kills to move on.
            </ListItem>
            <ListItem>
              If a player does not have the minimum number of kills upon that
              round ending, they will be automatically eliminated.
            </ListItem>
            <ListItem>
              The kills do not have to be in the relevant round. A player must
              meet the threshold in total kills, which includes those from
              previous rounds.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem fontWeight="bold">
          Safeties
          <UnorderedList fontWeight="normal">
            <ListItem>
              There will be a different “safety” every day. A “safety” is a
              different task that must be continuously performed in order to
              remain invulnerable.
            </ListItem>
            <ListItem>
              As the game progresses, safeties will continue to get more and
              more difficult.
            </ListItem>
            <ListItem>
              The day before the end of a round, there will be no daily safety.
              Safe zones (as listed below) are still valid during these days.
              This presents an opportunity for everyone to eliminate their
              target, regardless of who they are assigned.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem fontWeight="bold">
          Safe zones
          <UnorderedList fontWeight="normal">
            <ListItem>
              This is the exhaustive list of places where a player cannot be
              killed.
              <UnorderedList fontWeight="normal">
                <ListItem>
                  Cottage is safe inside the building and in the
                  courtyard/backyard. The front yard of the building, prior to
                  entering the doors, is NOT safe. No other eating clubs are
                  safe (nor dining halls). The exceptions are during nights out
                  (from 10pm-2am) and darties, the insides of other eating clubs
                  are safe, however the street is not. No one besides the
                  residents of Cottage is allowed to stay overnight.
                </ListItem>
                <ListItem>
                  Practice and competition (during, and preparing for), but not
                  travelling to/from.
                </ListItem>
                <ListItem>
                  Own bedrooms, but common rooms, dorm hallways, and other's
                  bedrooms are fair game.
                </ListItem>
                <ListItem>
                  Classrooms are safe ONLY during midterms/exams. More
                  specifically, the classroom is safe while you are inside
                  (including as you are prepping and finishing the exam).
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Being in a safe zone means that you are unable to kill or be
              killed. That is, kills from a player inside a safe zone to a
              player outside of a safe zone are not valid.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem fontWeight="bold">
          Timeline
          <UnorderedList fontWeight="normal">
            <ListItem>There will be a total of 4 rounds.</ListItem>
            <ListItem>
              At the end of every round, all targets will be shuffled.
            </ListItem>
            <ListItem>
              The last round will be ANARCHY, which means there will be no
              safety, no safe words, and no safe zones.
            </ListItem>
            <ListItem>
              At the end of 10/10, if there is still more than a single person
              remaining, there will be a duel between the two remaining
              participants with the most kills.
            </ListItem>
            <ListItem>
              Under NO circumstances will there be multiple winners. There will
              be a SINGLE winner.
            </ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem fontWeight="bold">
          Important dates
          <List fontWeight="normal">
            <ListItem>
              <ListIcon as={ViewIcon} color="green.500" />
              INITIAL TARGETS ANNOUNCED: 9/29 9AM
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="green.500" />
              START of ROUND 1: 10/2 9AM
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="red.500" />
              END of ROUND 1: 10/8 11:59PM (1 total kill required)
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="green.500" />
              START of ROUND 2: 10/9 9AM
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="red.500" />
              END of ROUND 2: 10/13 11:59PM (2 total kills required)
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="green.500" />
              START of ROUND 3: 10/23 9AM
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="red.500" />
              END of ROUND 3: 10/29 11:59PM (3 total kills required)
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="green.500" />
              START of ANARCHY: 10/30 9AM
            </ListItem>
            <ListItem>
              <ListIcon as={TimeIcon} color="red.500" />
              END of GAME: 11/1 11:59PM
            </ListItem>
          </List>
        </ListItem>
        <ListItem fontWeight="bold">
          Additional
          <UnorderedList fontWeight="normal">
            <ListItem>
              Let me know if the website is bugging out or it breaks completely,
              I'll fix it ASAP.
            </ListItem>
            <ListItem>
              If there is a dispute, it will be ruled by majority vote of 1
              (me).
            </ListItem>
          </UnorderedList>
        </ListItem>
      </UnorderedList>
    </Stack>
  );
}

export default Rules;
