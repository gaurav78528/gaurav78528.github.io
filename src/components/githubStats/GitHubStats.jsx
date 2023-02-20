import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import "./githubStats.css";
import Aos from "aos";
import "aos/dist/aos.css";
const selectLastHalfYear = (contributions) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const shownMonths = 12;

  return contributions.filter((day) => {
    const date = new Date(day.date);
    const monthOfDay = date.getMonth();

    return (
      date.getFullYear() === currentYear &&
      monthOfDay > currentMonth - shownMonths &&
      monthOfDay <= currentMonth
    );
  });
};

const GitHubStats = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div id="github_section">
      <h1 className="heading">
        My <span className="heading-highlight">Github</span> Stats
      </h1>
      {/* Contribution status */}
      <div data-aos="zoom-in-up">
        <GitHubCalendar
          style={{ margin: "auto" }}
          blockSize={16}
          fontSize={14}
          blockMargin={4}
          blockRadius={6}
          username="gaurav78528"
          transformData={selectLastHalfYear}
        >
          <ReactTooltip delayShow={20} html />
        </GitHubCalendar>
        {/* Streak Status */}
        <div className="stats_container">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=gaurav78528&theme=nightowl&border_radius=7"
            alt="Github stats"
            data-aos="flip-left"
          />
          <img
            src="https://github-readme-stats.vercel.app/api?username=gaurav78528&show_icons=true&theme=tokyonight"
            alt="Github Stats"
            data-aos="flip-right"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
