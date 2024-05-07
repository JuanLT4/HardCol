"use client";

import { useRouter } from "next/navigation";
import { ShowMoreProps } from '../types/index';
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext, handleClick }: ShowMoreProps) => {

  const handleNavigation = () => {
    // Calculate the new limit based on the page number and navigation type
    const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = '';

  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          btnType="button"
          title="Mostrar más"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

export default ShowMore;