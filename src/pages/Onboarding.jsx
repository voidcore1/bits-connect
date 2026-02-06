import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Flame,
  Mail,
  Lock,
  Calendar,
  MapPin,
  Rocket,
} from "lucide-react";
import ProgressBar from "@/components/onboarding/ProgressBar";
import TagInput from "@/components/onboarding/TagInput";
import { useShallow } from "zustand/react/shallow";
import { useOnboardingStore } from "@/store/onboardingStore";

const TOTAL_STEPS = 5;

const STATES = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Other",
];

const LANGUAGES = [
  "Hindi", "English", "Telugu", "Tamil", "Kannada", "Malayalam",
  "Marathi", "Bengali", "Gujarati", "Punjabi", "Odia", "Urdu", "Other",
];

const ACADEMIC_INTERESTS = [
  "AI/ML", "Data Science", "VLSI", "Embedded Systems", "Web Development",
  "App Development", "Cybersecurity", "Robotics", "Economics", "Finance",
  "Mathematics", "Physics", "Chemistry", "Biology", "Mechanical Engineering",
  "Civil Engineering", "Electrical Engineering",
];

const FUTURE_PLANS = [
  "Finance", "Coding", "Core Engineering", "Photography", "Higher Studies",
  "MBA", "Startups", "Research", "Consulting", "Product Management",
];

const SPORTS = [
  "Cricket", "Football", "Badminton", "Basketball", "Tennis", "Table Tennis",
  "Chess", "Swimming", "Athletics", "Volleyball", "Hockey",
];

const HOBBIES = [
  "Music", "Dramatics", "Gaming", "Photography", "Writing", "Dance",
  "Art & Design", "Debate", "Quiz", "Filmmaking", "Cooking",
];

const SKILLS = [
  "Python", "JavaScript", "C++", "Java", "Public Speaking", "Video Editing",
  "Graphic Design", "Data Analysis", "Content Writing", "UI/UX Design",
  "Project Management", "Leadership",
];

const Onboarding = () => {
  const navigate = useNavigate();
  const {
    step,
    nextStep,
    prevStep,
    email,
    setEmail,
    password,
    setPassword,
    dob,
    setDob,
    homeState,
    setHomeState,
    languages,
    setLanguages,
    academicInterests,
    setAcademicInterests,
    futurePlans,
    toggleFuturePlan,
    sports,
    toggleSport,
    hobbies,
    setHobbies,
    accomplishments,
    setAccomplishments,
    skills,
    setSkills,
    reset,
  } = useOnboardingStore(
    useShallow((state) => ({
      step: state.step,
      nextStep: state.nextStep,
      prevStep: state.prevStep,
      email: state.email,
      setEmail: state.setEmail,
      password: state.password,
      setPassword: state.setPassword,
      dob: state.dob,
      setDob: state.setDob,
      homeState: state.homeState,
      setHomeState: state.setHomeState,
      languages: state.languages,
      setLanguages: state.setLanguages,
      academicInterests: state.academicInterests,
      setAcademicInterests: state.setAcademicInterests,
      futurePlans: state.futurePlans,
      toggleFuturePlan: state.toggleFuturePlan,
      sports: state.sports,
      toggleSport: state.toggleSport,
      hobbies: state.hobbies,
      setHobbies: state.setHobbies,
      accomplishments: state.accomplishments,
      setAccomplishments: state.setAccomplishments,
      skills: state.skills,
      setSkills: state.setSkills,
      reset: state.reset,
    }))
  );

  const handleFinish = () => {
    reset();
    navigate("/");
  };

  const slideVariants = {
    enter: { x: 60, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -60, opacity: 0 },
  };

  return (
    <div className="onboarding">
      <div className="onboarding__container">
        <div className="onboarding__header">
          <Flame className="onboarding__logo" />
          <span className="onboarding__brand">Grinder</span>
        </div>

        <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />

        <div className="onboarding__card">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="onboarding__step"
            >
              {step === 0 && (
                <div className="onboarding__step-content">
                  <div>
                    <h2 className="onboarding__step-title">Create your account</h2>
                    <p className="onboarding__step-desc">
                      Use your BITS email to get started.
                    </p>
                  </div>
                  <div className="onboarding__form">
                    <div className="onboarding__field">
                      <label className="onboarding__label">Email</label>
                      <div className="onboarding__input-wrapper">
                        <Mail className="onboarding__input-icon" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="f20XXXXXX@pilani.bits-pilani.ac.in"
                          className="onboarding__input"
                        />
                      </div>
                    </div>
                    <div className="onboarding__field">
                      <label className="onboarding__label">Password</label>
                      <div className="onboarding__input-wrapper">
                        <Lock className="onboarding__input-icon" />
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Create a strong password"
                          className="onboarding__input"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 1 && (
                <div className="onboarding__step-content">
                  <div>
                    <h2 className="onboarding__step-title">The Basics</h2>
                    <p className="onboarding__step-desc">
                      Tell us a bit about yourself.
                    </p>
                  </div>
                  <div className="onboarding__form">
                    <div className="onboarding__field">
                      <label className="onboarding__label">Date of Birth</label>
                      <div className="onboarding__input-wrapper">
                        <Calendar className="onboarding__input-icon" />
                        <input
                          type="date"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          className="onboarding__input"
                        />
                      </div>
                    </div>
                    <div className="onboarding__field">
                      <label className="onboarding__label">Home State</label>
                      <div className="onboarding__input-wrapper">
                        <MapPin className="onboarding__input-icon" />
                        <select
                          value={homeState}
                          onChange={(e) => setHomeState(e.target.value)}
                          className="onboarding__input onboarding__select"
                        >
                          <option value="">Select your state</option>
                          {STATES.map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <TagInput
                      label="Languages Spoken"
                      placeholder="Type a language..."
                      tags={languages}
                      onTagsChange={setLanguages}
                      suggestions={LANGUAGES}
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="onboarding__step-content">
                  <div>
                    <h2 className="onboarding__step-title">Academic Profile</h2>
                    <p className="onboarding__step-desc">
                      What gets you intellectually excited?
                    </p>
                  </div>
                  <div className="onboarding__form">
                    <TagInput
                      label="Academic Interests"
                      placeholder="e.g., AI/ML, VLSI..."
                      tags={academicInterests}
                      onTagsChange={setAcademicInterests}
                      suggestions={ACADEMIC_INTERESTS}
                    />
                    <div className="onboarding__field">
                      <label className="onboarding__label">Future Plans</label>
                      <div className="onboarding__chips">
                        {FUTURE_PLANS.map((plan) => (
                          <button
                            key={plan}
                            onClick={() => toggleFuturePlan(plan)}
                            className={`onboarding__chip ${
                              futurePlans.includes(plan)
                                ? "onboarding__chip--selected"
                                : ""
                            }`}
                          >
                            {plan}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="onboarding__step-content">
                  <div>
                    <h2 className="onboarding__step-title">The Fun Stuff</h2>
                    <p className="onboarding__step-desc">
                      Life at BITS isn't all academics 😎
                    </p>
                  </div>
                  <div className="onboarding__form">
                    <div className="onboarding__field">
                      <label className="onboarding__label">Sports</label>
                      <div className="onboarding__chips onboarding__chips--accent">
                        {SPORTS.map((sport) => (
                          <button
                            key={sport}
                            onClick={() => toggleSport(sport)}
                            className={`onboarding__chip onboarding__chip--accent ${
                              sports.includes(sport)
                                ? "onboarding__chip--selected"
                                : ""
                            }`}
                          >
                            {sport}
                          </button>
                        ))}
                      </div>
                    </div>
                    <TagInput
                      label="Hobbies & Misc"
                      placeholder="e.g., Music, Gaming..."
                      tags={hobbies}
                      onTagsChange={setHobbies}
                      suggestions={HOBBIES}
                    />
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="onboarding__step-content">
                  <div>
                    <h2 className="onboarding__step-title">The Flex 💪</h2>
                    <p className="onboarding__step-desc">
                      Show off a little. You've earned it.
                    </p>
                  </div>
                  <div className="onboarding__form">
                    <div className="onboarding__field">
                      <label className="onboarding__label">Accomplishments</label>
                      <textarea
                        value={accomplishments}
                        onChange={(e) => setAccomplishments(e.target.value)}
                        placeholder="Olympiads, hackathon wins, national-level competitions, research papers..."
                        rows={4}
                        className="onboarding__textarea"
                      />
                    </div>
                    <TagInput
                      label="Skills I Have"
                      placeholder="e.g., Python, Public Speaking..."
                      tags={skills}
                      onTagsChange={setSkills}
                      suggestions={SKILLS}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="onboarding__nav">
            <button
              onClick={step === 0 ? () => navigate("/") : prevStep}
              className="onboarding__nav-btn onboarding__nav-btn--back"
            >
              <ArrowLeft className="onboarding__nav-icon" />
              {step === 0 ? "Home" : "Back"}
            </button>

            {step < TOTAL_STEPS - 1 ? (
              <button
                onClick={nextStep}
                className="onboarding__nav-btn onboarding__nav-btn--primary"
              >
                Next
                <ArrowRight className="onboarding__nav-icon" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="onboarding__nav-btn onboarding__nav-btn--primary onboarding__nav-btn--glow"
              >
                <Rocket className="onboarding__nav-icon" />
                Start Grinding
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
