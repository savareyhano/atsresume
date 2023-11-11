import FormButton from "./FormButton";
import React, { useContext } from "react";
import { ResumeContext } from "../../pages/builder";

const Achievements = () => {
    const { resumeData, setResumeData} = useContext(ResumeContext);

    const handleAchievements = (e, index) => {
      const newAchievements = [...resumeData.achievements];
    //   newAchievements[index][e.target.name] = e.target.value;
      newAchievements[index] = e.target.value;
      setResumeData({ ...resumeData, achievements: newAchievements });
    };
  
    const addAchievements = () => {
      setResumeData({
        ...resumeData,
        achievements: [
          ...resumeData.achievements,
          "",
        ],
      });
    };
  
    const removeAchievements = (index) => {
      const newAchievements = [...resumeData.achievements];
      newAchievements[index] = newAchievements[newAchievements.length - 1];
      newAchievements.pop();
      setResumeData({ ...resumeData, achievements: newAchievements });
    };
    
    return (
      <div className="flex-col-gap-2">
        <h2 className="input-title">Notable Achievements</h2>
        {resumeData.achievements.map((achievement, index) => (
          <div key={index} className="f-col">
            <input
              type="text"
              placeholder="Notable Achievement"
              name="notableAchievement"
              className="w-full other-input"
              value={achievement}
              onChange={(e) => handleAchievements(e, index)} />
          </div>
        ))}
        <FormButton size={resumeData.achievements.length} add={addAchievements} remove={removeAchievements} />
      </div>
    )
  }

export default Achievements;