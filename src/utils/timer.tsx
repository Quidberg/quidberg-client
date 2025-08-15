import { useEffect, useState } from "react";
import { SavedExam } from "../pages/client/examination/StartExam";
// import { format } from "date-fns";
import { useTimer } from "react-timer-hook";
// import { set } from "lodash";

type Props = {
  callback?: () => void;
  // delay?: number;
  duration: number; //mins;
  examId: string;
  loading: boolean;
  onExpire: () => void;
};

export const useExamTimer = ({
  //   callback,
  duration,
  examId,
  loading,
  onExpire,
}: Props) => {
  const [timerStarted, setTimerStarted] = useState(false);
  const [expiryTimestamp, setExpiryTimestamp] = useState<Date>(
    new Date() as unknown as Date
  );

  const { seconds, minutes, hours, restart, totalMilliseconds } =
    useTimer({
      expiryTimestamp,
      onExpire: () => {
        onExpire();
        console.warn("onExpire called");
      },
      interval: 5,
      autoStart: false,
    });

  //set current time state
  useEffect(() => {
    if (loading) return;

    // let expiryTime: Date;
    const savedExamData: string | null = localStorage.getItem(examId);

    const parsedExamData: SavedExam = savedExamData
      ? (JSON.parse(savedExamData) as SavedExam)
      : null;

    const savedExpiryTime = parsedExamData?.expiryTimeStamp;

    const newExpiryTime = new Date(
      new Date().getTime() + duration * 60 * 1000
    );
    if (!savedExpiryTime) {
      //   expiryTime = newExpiryTime;
      // save started time to local storage if it doesn't exist
      setExpiryTimestamp(new Date(newExpiryTime));
      localStorage.setItem(
        examId,
        JSON.stringify({
          ...parsedExamData,
          expiryTimeStamp: newExpiryTime,
        })
      );
    } else {
      //   expiryTime = savedExpiryTime;
      setExpiryTimestamp(new Date(savedExpiryTime));
    }
    setTimerStarted(true);
  }, [duration, examId, loading]);

  //   //start countdown
  useEffect(() => {
    if (timerStarted) {
      restart(new Date(expiryTimestamp));
    }
  }, [timerStarted, expiryTimestamp]);

  if (loading) return { seconds, minutes, hours, isRunning: false };

  return { seconds, minutes, hours, totalMilliseconds };
};
