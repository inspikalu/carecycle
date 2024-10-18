import Image from "next/image";

const someData = [
  {
    imageUrl: "/meditate.png",
    header: "Mindfulness",
    description: "Learning to be present with your thoughts and feelings",
  },
  {
    imageUrl: "/yoga.png",
    header: "Yoga",
    description: "Physical activity that connects the body and mind",
  },
  {
    imageUrl: "/natureTherapy.png",
    header: "Nature Therapy",
    description: "Spending time in nature as a form of therapy",
  },
  {
    imageUrl: "/artTherapy.png",
    header: "Art Therapy",
    description: "Expressing and processing emotions through art",
  },
  {
    imageUrl: "/nutrition.png",
    header: "Nutrition",
    description: "Eating a balanced diet for mental and physical well-being",
  },
];
const someOtherData = [
  {
    imageUrl: "/breathwork.png",
    header: "Breathwork",
    description: "Using breath to regulate emotions and reduce stress",
  },
  {
    imageUrl: "/therapy.png",
    header: "Therapy",
    description: "Professional guidance for mental health concerns",
  },
  {
    imageUrl: "/journaling.png",
    header: "Journaling",
    description: "Writing to process thoughts, emotions, and experiences",
  },
  {
    imageUrl: "/music.png",
    header: "Music",
    description: "Listening to music to improve mood and well-being",
  },
  {
    imageUrl: "/aromatherapy.png",
    header: "Aromatherapy",
    description: "Eating a balanced diet for mental and physical well-being",
  },
];
export const MindfulnessCard = ({
  imageUrl,
  header,
  description,
}: {
  imageUrl: string;
  header: string;
  description: string;
}) => {
  return (
    <div className="max-w-[15rem] overflow-hidden">
      <div className="grid">
        <div className="relative w-full h-full aspect-video">
          <Image
            src={imageUrl}
            alt={header}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-neutral-800">{header}</h2>
          <p className="text-neutral-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

const Featured = () => {
  return (
    <>
      <section className="my-[3rem]">
        <div className="text-3xl font-bold">
          Featured in self-guided practices
        </div>
        <span className="inline-block mt-3 mb-[4rem]">
          Discover different modalities to support your mental health
        </span>
        <div className="flex items-center flex-wrap gap-4 justify-start">
          {someData.map((item, index) => {
            return (
              <MindfulnessCard
                key={index}
                imageUrl={item.imageUrl}
                header={item.header}
                description={item.description}
              />
            );
          })}
        </div>
      </section>
      <section className="my-[3rem]">
        <div className="text-3xl font-bold">Explore more practices</div>
        <span className="inline-block mt-3 mb-[4rem]">
          Find the right tools to support your mental health and well-being
        </span>
        <div className="flex items-center flex-wrap gap-4 justify-start">
          {someOtherData.map((item, index) => {
            return (
              <MindfulnessCard
                key={index}
                imageUrl={item.imageUrl}
                header={item.header}
                description={item.description}
              />
            );
          })}
        </div>
      </section>
      <section className="w-full aspect-video grid sm:grid-cols-1 md:grid-cols-2 gap-3">
        <div className="w-full overflow-hidden relative rounded-lg">
          <Image
            src={"/meditateBig1.png"}
            layout="fill"
            objectFit="cover"
            alt="2 men meditating"
          />
        </div>
        <div className="w-full overflow-hidden relative rounded-lg">
          <Image
            src={"/mediatateBig.png"}
            layout="fill"
            objectFit="cover"
            alt="2 men meditating"
          />
        </div>
      </section>
    </>
  );
};

export default Featured;
