export default function PostOffers({ data }) {
  const { wifi, tv, washer, ac, heating, breakfast, freeParking, refrigerator, freezer, dishwasher, stove, oven, coffeeMaker } = data;
  return (
    <div className="grid grid-cols-2 gap-2 gap-y-3 pt-2 pb-8">
      {wifi ? (
        <div className="flex gap-2 items-center">
          <i className="fa-regular fa-wifi text-xl w-[20%] text-center"></i>
          <p className="w-[80%]">Wifi</p>
        </div>
      ) : null}
      {tv ? (
        <div className="flex gap-2 items-center">
          <i className="fa-regular fa-tv text-xl w-[20%] text-center"></i>
          <p className="w-[80%]">TV</p>
        </div>
      ) : null}
      {washer ? (
        <div className="flex gap-2 items-center">
          <i className="fa-regular fa-washing-machine text-xl w-[20%] text-center"></i>
          <p className="w-[80%]">Washer</p>
        </div>
      ) : null}
      {ac ? (
        <div className="flex gap-2 items-center">
          <i className="fa-regular fa-snowflake text-xl w-[20%] text-center"></i> <p className="w-[80%]">Air conditioning</p>
        </div>
      ) : null}
      {heating ? (
        <div className="flex gap-2 items-center">
          <i className="fa-regular fa-temperature-full text-xl w-[20%] text-center"></i>
          <p className="w-[80%]">Heating</p>
        </div>
      ) : null}
      {breakfast ? (
        <div className="flex gap-2 items-center">
          <i className="fa-regular fa-mug-hot text-xl w-[20%] text-center"></i>
          <p className="w-[80%]">Breakfast</p>
        </div>
      ) : null}
      {freeParking ? (
        <div className="flex gap-2 items-center">
          <i className="fa-regular fa-car text-xl w-[20%] text-center"></i>
          <p className="w-[80%]">Free parking</p>
        </div>
      ) : null}
      {refrigerator ? (
        <div className="flex gap-2 items-center">
          <i className="fa-regular fa-refrigerator text-xl w-[20%] text-center"></i>
          <p className="w-[80%]">Refrigerator</p>
        </div>
      ) : null}
      {freezer ? (
        <div className="flex gap-2 items-center">
          <i className="fa-regular fa-refrigerator text-xl w-[20%] text-center"></i>
          <p className="w-[80%]">Freezer</p>
        </div>
      ) : null}
      {dishwasher ? (
        <div className="flex gap-2 items-center">
          <i className="fa-regular fa-washing-machine text-xl w-[20%] text-center"></i>
          <p className="w-[80%]">Dishwasher</p>
        </div>
      ) : null}
      {stove ? (
        <div className="flex gap-2 items-center">
          <i className="fa-light fa-fire-burner text-xl w-[20%] text-center"></i>
          <p className="w-[80%]">Stove</p>
        </div>
      ) : null}
      {oven ? (
        <div className="flex gap-2 items-center">
          <i className="fa-light fa-oven text-xl w-[20%] text-center"></i>
          <p className="w-[80%]">Oven</p>
        </div>
      ) : null}
      {coffeeMaker ? (
        <div className="flex gap-2 items-center">
          <i className="fa-regular fa-coffee-pot text-xl w-[20%] text-center"></i>
          <p className="w-[80%]">Coffee maker</p>
        </div>
      ) : null}
    </div>
  );
}
