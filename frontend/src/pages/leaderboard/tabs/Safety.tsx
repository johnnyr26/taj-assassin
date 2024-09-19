import { useState } from 'react';
import { GameInfo } from "shared/api/game";
import { SafetyCountdown } from "components/Countdown";
import { Button, Card, Stack, Text, Textarea } from "@chakra-ui/react";

import { submitSafety } from "api/game/safety";

/**
 * A page that lists today's and tomorrow's safety. Will switch at midnight EST
 * everyday, and is grabbed from the game info object.
 */
function Safety({ gameInfo }: { gameInfo: GameInfo }) {
  // Safety Input
  const [safety, setSafety] = useState<string>("");

  // Text to display
  let today = "No safety today.";
  let tomorrow = "No safety tomorrow.";

  let immunity = "No immunity today.";
  let killDeduction = "No spell casted today.";

  // Get the current
  const now = new Date();
  const tmmrw = new Date(now);
  // Set the day of the month to tomorrow
  tmmrw.setDate(tmmrw.getDate() + 1);

  // When the first safety should be
  const start = new Date(gameInfo.startTime);

  // Use this difference in order to index into the safeties array and display the correct ones
  var diff = now.getTime() - start.getTime();
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  diffDays -= 1;

  /**
   * Make sure the index exists AND is non-empty (otherwise keep the default text)
   */

  // For today
  if (diffDays >= 0 && diffDays < gameInfo.safeties.length) {
    if (gameInfo.safeties[diffDays] !== "") {
      today = gameInfo.safeties[diffDays];
      // immunity = gameInfo.immunities[diffDays]
      // killDeduction = gameInfo.killDeductions[diffDays]
    }
  }

  // For tomorrow
  if (diffDays + 1 >= 0 && diffDays + 1 < gameInfo.safeties.length) {
    if (gameInfo.safeties[diffDays + 1] !== "")
      tomorrow = gameInfo.safeties[diffDays + 1];
  }

  const handleSubmit = async () => {
    if (safety.trim() === "") {
      alert("You did not enter a safety. Please try again");
      return;
    }
    await submitSafety(safety);
    setSafety("");
    alert("Safety has been submitted successfully.");
  }

  return (
    <Stack alignItems="center">
      <SafetyCountdown />
      <Card
        variant="outline"
        boxShadow={"lg"}
        width="90%"
        minWidth="400px"
        padding={4}
        backgroundColor="orange.100"
        display="flex"
        alignItems="center"
      >
        <Text fontWeight="extrabold">
          Today's safety ({now.getMonth() + 1}/{now.getDate()})
        </Text>
        <Text textAlign="center">{today}</Text>
      </Card>
      <Card
        variant="outline"
        boxShadow={"lg"}
        width="90%"
        minWidth="400px"
        padding={4}
        backgroundColor="orange.100"
        display="flex"
        alignItems="center"
      >
        <Text fontWeight="extrabold">
          Tomorrow's safety ({tmmrw.getMonth() + 1}/{tmmrw.getDate()})
        </Text>
        <Text textAlign="center">{tomorrow}</Text>
      </Card>
      {gameInfo?.role === "ADMIN" && (
        <>
          <Textarea placeholder="Create new safety" onChange={(e) => setSafety(e.target.value)} h={100} value={safety} />
          <Button onClick={async () => {
            await handleSubmit();
          }}>Submit</Button>
        </>
      )}
    </Stack>
  );
}

export default Safety;
