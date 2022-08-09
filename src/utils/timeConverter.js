export const convertTime = (time) => {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  if (minutes < 10) minutes = `0${minutes}`;
  let seconds = Math.floor((time % 3600) % 60);
  if (seconds < 10) seconds = `0${seconds}`;

  return `${hours}:${minutes}:${seconds}`;
};
