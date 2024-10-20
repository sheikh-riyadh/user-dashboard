import { useState } from "react";
import { useForm } from "react-hook-form";
import BasicInfo from "../../components/AddProduct/BasicInfo";
import DescriptionInfo from "../../components/AddProduct/DescriptionInfo";
import StockPriceAndQuantity from "../../components/AddProduct/StockPriceAndQuantity";

const AddProduct = () => {
  const [productKeyFeatures, setProductKeyFeatures] = useState([]);
  const [content, setContent] = useState("asfasfasfasfdasfasfd");
  const { handleSubmit, register, setValue } = useForm();

  const handleProductKeyFeature = (event) => {
    if (event.key === "Enter") {
      const data = event.target.value;
      if (!productKeyFeatures.includes(data)) {
        setProductKeyFeatures((prev) => [...prev, data]);
        setValue("key-features");
      }
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const handleOnSubmit = (data) => {
    console.log(data);
  };

  const handleDeleteKeyFeatures = (deleteFeatureItem) => {
    const restFeatures = productKeyFeatures.filter(
      (feature) => feature != deleteFeatureItem
    );
    setProductKeyFeatures(restFeatures);
  };

  return (
    <div>
      <div className="h-40 bg-secondary w-full"></div>
      <div className="my_container">
        <div className="shadow w-full -mt-16 bg-white rounded-md overflow-hidden p-10">
          <form
            onSubmit={handleSubmit(handleOnSubmit)}
            onKeyDown={handleKeyDown}
            className="overflow-hidden flex flex-col gap-5"
          >
            <div className="border rounded-md overflow-hidden">
              <div className="mb-5 bg-stech text-white p-2">
                <span>Basic Information</span>
              </div>
              <BasicInfo
                handleDeleteKeyFeatures={handleDeleteKeyFeatures}
                handleProductKeyFeature={handleProductKeyFeature}
                productKeyFeatures={productKeyFeatures}
                register={register}
              />
            </div>

            <div className="border rounded-md overflow-hidden">
              <DescriptionInfo
                content={content}
                register={register}
                setContent={setContent}
              />
            </div>

            <div className="border rounded-md overflow-hidden">
              <div className="mb-5 bg-stech text-white p-2">
                <span>Price and quantity</span>
              </div>
              <div className="flex flex-col gap-1 p-5">
                <StockPriceAndQuantity register={register} />
              </div>
            </div>
            <button>send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
