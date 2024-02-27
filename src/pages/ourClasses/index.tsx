import { SelectedPage, OurClassListType } from '@/shared/Type'
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from 'framer-motion';
import { Htext } from '@/shared/Htext';
import OurClass from './OurClass';
const ourClassesList: Array<OurClassListType> = [
    {
        id: 1,
        name: "Weight Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image1,
    },
    {
        id: 2,
        name: "Yoga Classes",
        image: image2,
    },
    {
        id: 3,
        name: "Ab Core Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image3,
    },
    {
        id: 4,
        name: "Adventure Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image4,
    },
    {
        id: 5,
        name: "Fitness Classes",
        image: image5,
    },
    {
        id: 6,
        name: "Training Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: image6,
    },
]
type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id='ourClasses' className='w-full bg-primary-100 py-40 '>
            <motion.div

                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div className='mx-auto w-5/6 '
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}>
                    <div className='md:w-3/5'>
                        <Htext >
                            OUR CLASSES
                        </Htext>
                        <p className='py-5'>
                            Step into a world of fitness excellence with our diverse range of classes designed to elevate your workout experience. From high-energy cardio sessions to mind-body fusion practices,our classes cater to all fitness levels and goals. Each session is crafted to ignite your passion for health and wellness, empowering you to surpass your limits and unlock your full potential. Join us in the pursuit of strength, vitality, and transformation. Your journey to a healthier, happier you starts here.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {ourClassesList.map((itemList: OurClassListType) => (
                            <OurClass key={itemList.id} name={itemList.name} description={itemList.description} image={itemList.image} />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClasses
