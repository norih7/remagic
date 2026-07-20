import Image from "next/image";

type Props = {
  src: string;
};

const ResponsiveImage = (props: Props) => {
  const { src } = props;
  return (
    <div className="bg-gray-900">
      <Image
        src={src}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
        className="mb-4 mx-auto"
      />
    </div>
  );
};

export default ResponsiveImage;
