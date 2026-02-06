import { useState } from "react";
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
  const [step, setStep] = useState(0);

  // Step 1 - Auth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Step 2 - Basics
  const [dob, setDob] = useState("");
  const [homeState, setHomeState] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);

  // Step 3 - Academic
  const [academicInterests, setAcademicInterests] = useState<string[]>([]);
  const [futurePlans, setFuturePlans] = useState<string[]>([]);

  // Step 4 - Fun
  const [sports, setSports] = useState<string[]>([]);
  const [hobbies, setHobbies] = useState<string[]>([]);

  // Step 5 - Flex
  const [accomplishments, setAccomplishments] = useState("");
  const [skills, setSkills] = useState<string[]>([]);

  const nextStep = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleFinish = () => {
    navigate("/");
  };

  const slideVariants = {
    enter: { x: 60, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -60, opacity: 0 },
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <Flame className="w-6 h-6 text-primary" />
          <span className="font-bold text-xl">Grinder</span>
        </div>

        <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />

        <div className="rounded-2xl bg-card border border-border p-6 sm:p-8 min-h-[420px] flex flex-col">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1"
            >
              {/* Step 0: Auth */}
              {step === 0 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Create your account</h2>
                    <p className="text-muted-foreground">
                      Use your BITS email to get started.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Email
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="f20XXXXXX@pilani.bits-pilani.ac.in"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Create a strong password"
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1: Basics */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">The Basics</h2>
                    <p className="text-muted-foreground">
                      Tell us a bit about yourself.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Date of Birth
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                          type="date"
                          value={dob}
                          onChange={(e) => setDob(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Home State
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <select
                          value={homeState}
                          onChange={(e) => setHomeState(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none"
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

              {/* Step 2: Academic */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Academic Profile</h2>
                    <p className="text-muted-foreground">
                      What gets you intellectually excited?
                    </p>
                  </div>
                  <div className="space-y-6">
                    <TagInput
                      label="Academic Interests"
                      placeholder="e.g., AI/ML, VLSI..."
                      tags={academicInterests}
                      onTagsChange={setAcademicInterests}
                      suggestions={ACADEMIC_INTERESTS}
                    />
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Future Plans
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {FUTURE_PLANS.map((plan) => (
                          <button
                            key={plan}
                            onClick={() =>
                              setFuturePlans((prev) =>
                                prev.includes(plan)
                                  ? prev.filter((p) => p !== plan)
                                  : [...prev, plan]
                              )
                            }
                            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                              futurePlans.includes(plan)
                                ? "bg-primary/15 border-primary text-primary"
                                : "bg-secondary border-border text-muted-foreground hover:border-primary/50"
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

              {/* Step 3: Fun */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">The Fun Stuff</h2>
                    <p className="text-muted-foreground">
                      Life at BITS isn't all academics 😎
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Sports
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {SPORTS.map((sport) => (
                          <button
                            key={sport}
                            onClick={() =>
                              setSports((prev) =>
                                prev.includes(sport)
                                  ? prev.filter((s) => s !== sport)
                                  : [...prev, sport]
                              )
                            }
                            className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                              sports.includes(sport)
                                ? "bg-accent/15 border-accent text-accent"
                                : "bg-secondary border-border text-muted-foreground hover:border-accent/50"
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

              {/* Step 4: Flex */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">The Flex 💪</h2>
                    <p className="text-muted-foreground">
                      Show off a little. You've earned it.
                    </p>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">
                        Accomplishments
                      </label>
                      <textarea
                        value={accomplishments}
                        onChange={(e) => setAccomplishments(e.target.value)}
                        placeholder="Olympiads, hackathon wins, national-level competitions, research papers..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
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

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            <button
              onClick={step === 0 ? () => navigate("/") : prevStep}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {step === 0 ? "Home" : "Back"}
            </button>

            {step < TOTAL_STEPS - 1 ? (
              <button
                onClick={nextStep}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Next
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity glow-red"
              >
                <Rocket className="w-4 h-4" />
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
