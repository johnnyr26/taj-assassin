import { authPost } from "../../utils/http";
import { getRecoil } from "recoil-nexus";
import { gameInfoAtom } from "global/user-state";

/** ADMIN ONLY: Submit safety for  */
export const submitSafety = async (safety: string) => {
  const info = getRecoil(gameInfoAtom);
  if (!info) return;

  await authPost<any[]>(`/game/submitSafety?gameId=${info.gameId}&safety=${safety}`);
};
