import Image from "next/image";

export default function PostImages({ type, id }) {
  return (
    <div className="pt-6 flex gap-2">
      <div className="w-[50%]">
        <div className="relative pb-[65%]">
          <Image
            className="rounded-l-2xl object-cover"
            fill
            alt={`${type} ${id} image_1`}
            src={`/house_images/${type}/${id}/image_1.webp`}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 w-[50%]">
        <div className="w-full relative">
          <Image className="object-cover" fill alt={`${type} ${id} image_2`} src={`/house_images/${type}/${id}/image_2.webp`} />
        </div>
        <div className="w-full relative">
          <Image
            className="rounded-tr-2xl object-cover"
            fill
            alt={`${type} ${id} image_3`}
            src={`/house_images/${type}/${id}/image_3.webp`}
          />
        </div>
        <div className="w-full relative">
          <Image className="object-cover" fill alt={`${type} ${id} image_4`} src={`/house_images/${type}/${id}/image_4.webp`} />
        </div>
        <div className="w-full relative">
          <Image
            className="rounded-br-2xl object-cover"
            fill
            alt={`${type} ${id} image_5`}
            src={`/house_images/${type}/${id}/image_5.webp`}
          />
        </div>
      </div>
    </div>
  );
}
