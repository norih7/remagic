import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  noSpace?: boolean;
};

const ResponsiveImage = (props: Props) => {
  const { src, alt = "", noSpace = false } = props;
  const className = noSpace ? "" : "mb-4";
  return (
    <div className={`bg-gray-900 rounded-sm overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
        className={` mx-auto`}
      />
    </div>
  );
};

export default ResponsiveImage;
