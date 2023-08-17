import { Route, Routes } from "react-router-dom";

import BaseLayout from "layout/Base";

import IntroStep from "pages/Intro";
import PlayersStep from "pages/Players";
import StartStep from "pages/Start";
import TimePlayersStep from "pages/TimePlayers";
import TimerStep from "pages/Timer";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<IntroStep />} />
        <Route path="time-players" element={<TimePlayersStep />} />
        <Route path="start" element={<StartStep />} />
        <Route path="players" element={<PlayersStep />} />
        <Route path="timer" element={<TimerStep />} />
      </Route>
    </Routes>
  );
}
