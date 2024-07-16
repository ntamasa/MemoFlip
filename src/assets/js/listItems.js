import TrophyIcon from "./TrophyIcon";
import ThumbsUpIcon from "./ThumbsUpIcon";
import MarkIcon from "./MarkIcon";

const listItems = [
  {
    icon: TrophyIcon,
    heading: "5 Points for Quick Matches",
    text: "If you manage to find a pair in 3 or fewer tries, you earn the maximum of 5 points. This high score rewards your sharp memory and quick decision-making skills. Aim for this to maximize your points and top the leaderboards.",
  },

  {
    icon: ThumbsUpIcon,
    heading: "3 Points for Moderate Matches",
    text: "Finding a pair in 5 or fewer tries earns you 3 points. This is a solid performance that shows you&apos;re getting the hang of it. Keep practicing to reduce the number of tries and increase your score.",
  },

  {
    icon: MarkIcon,
    heading: "1 Point for Persistent Matches",
    text: "If it takes more than 5 tries to find a pair, you still earn 1 point. Every effort counts, and this score encourages persistence and continuous improvement. Learn from each attempt and aim to reduce your tries in the next round.",
  },
];

export default listItems;
