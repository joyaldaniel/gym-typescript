import { Htext } from "@/shared/Htext"
import { BenfitsType, SelectedPage } from "@/shared/Type"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import BenfitsList from "./BenfitsList"
import ActionButtons from "@/shared/ActionButtons"
import BenfitGrapicImage from "../../assets/BenefitsPageGraphic.png"
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}
const BenfitDataList: Array<BenfitsType> = [
    {
        id: 1,
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
            "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.Train like a beast, look like a beauty",
    },
    {
        id: 2,
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            "Where Every Move Counts: Join Our Diverse Fitness Classes Today and Rewrite Your Story.",
    },
    {
        id: 3,
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
            "In the hands of our expert trainers, every drop of sweat becomes a step closer to success, every challenge a triumph, and every goal a reality..",
    },
]
const Benfits = ({ setSelectedPage }: Props) => {
    const container = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2 }
        }
    }
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benfits)}
            >
                <div className="md:my:5 md:w-3/5">
                    <Htext>MORE THAN JUST A GYM.</Htext>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </div>
                <motion.div className="md:flex items-center justify-between gap-8 mt-5"
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}>
                    {BenfitDataList?.map((itemList: BenfitsType) => (
                        <BenfitsList key={itemList.id} icon={itemList.icon} title={itemList.title} description={itemList.description} setSelectedPage={setSelectedPage} />
                    ))}
                </motion.div>
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    <img className="mx-auto" src={BenfitGrapicImage} alt="benefits-page-graphic" />
                    <div>
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{  duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <Htext>
                                        MILLIONS OF HAPPY MEMBERS GETTING {' '}
                                        <span className="text-primary-500">FIT</span>
                                    </Htext>
                                </motion.div>
                            </div>

                        </div>
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          variants={{
                              hidden: { opacity: 0, x: 50 },
                              visible: { opacity: 1, x: 0 },
                          }}
                        >
                            <p className="my-5">
                                Joining our gym isn't just about signing up for a membership; it's about embarking on a transformative journey towards a healthier, happier you.
                                
                                    Every drop of sweat shed during our workouts is a silent applause for the dedication you're putting into your health and well-being. It's not just about burning calories; it's an investment in yourself – an investment that pays dividends in vitality, confidence, and longevity.
                               
                                At our gym, we believe that exercise is the key that unlocks the door to a lifetime of physical and mental wellness. With each workout, you're not just shaping your body; you're shaping your destiny.
                            </p>
                            <p className="my-5">
                                Exercise is the ultimate form of self-love. It's a declaration that you deserve to feel strong, confident, and alive. So lace up those shoes, step into our gym, and show yourself the love and care you deserve. Join us today and start your journey towards a healthier, happier life!
                            </p>
                        </motion.div>
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                                <ActionButtons setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButtons>

                            </div>

                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benfits
