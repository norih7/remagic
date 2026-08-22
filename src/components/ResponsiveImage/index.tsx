import Image from "next/image";

type Props = {
  src: string;
  alt?: string;
  noSpace?: boolean;
};

const ResponsiveImage = (props: Props) => {
  const { src, alt = "", noSpace = false } = props;
  const className = noSpace ? "mx-auto" : "mb-4 mx-auto";
  return (
    <div className="bg-gray-900">
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
        className={className}
      />
    </div>
  );
};

export default ResponsiveImage;
