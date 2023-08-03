import { clear, remove } from "@/redux/builderslice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PcBuilder = () => {
  const [disabled, setDisabled] = useState(true);
  const data = useAppSelector((item) => item.builder);
  const processor = data.find((item) => item.category == "processor");
  const motherboard = data.find((item) => item.category == "motherboard");
  const ram = data.find((item) => item.category == "ram");
  const powerSupply = data.find((item) => item.category == "power supply");
  const storageDevice = data.find((item) => item.category == "storage device");
  const monitor = data.find((item) => item.category == "monitor");
  const others = data.find((item) => item.category == "others");

  const dispatch = useAppDispatch();
  const totalPrice = data.reduce((total, product) => total + product.Price, 0);
  const notify = () => {
    toast.success("Congratulations! You have build your own pc.", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  useEffect(() => {
    if (data.length > 4) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [data.length]);
  return (
    <div className="py-14 lg:py-24">
      <div className="container">
        <h3 className="text-center text-3xl font-semibold">
          Build Your Dream PC With Herotech
        </h3>
        <div className="flex justify-between flex-wrap items-center">
          <p className="text-center">Choose your Components</p>
          <h4>Total Price : {totalPrice}</h4>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => dispatch(clear())}
              className="py-3 px-5 rounded-lg bg-yellow-600 border-none text-white"
            >
              Clear All
            </button>
            <button
              disabled={disabled}
              onClick={notify}
              className="py-3 px-5 cursor-pointer rounded-lg bg-green-600 text-white border-none disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              Complete Build
            </button>
          </div>
        </div>

        <div
          className="flex flex-col border"
          style={{ border: "1px solid black", padding: "10px 20px" }}
        >
          <div className="flex gap-3 items-center justify-between border-2 border-gray-400">
            <p>1</p>
            <h4>Processor</h4>
            <Link
              href="/category/processor"
              className="py-3 px-3 rounded-lg bg-green-500 text-white"
            >
              {processor ? "Change" : "Select"}
            </Link>
          </div>
          {processor && (
            <div className="flex items-center justify-between ">
              <Image src={processor.image} alt="img" width={200} height={100} />
              <h4>{processor.title}</h4>
              <h3>Price : {processor.Price}</h3>
              <button
                className="py-3 px-5 rounded-lg bg-red-500 border-none text-white"
                onClick={() => dispatch(remove(processor))}
              >
                Remove
              </button>
            </div>
          )}
        </div>
        <div
          className="flex flex-col border"
          style={{ border: "1px solid black", padding: "10px 20px" }}
        >
          <div className="flex gap-3 items-center justify-between border-2 border-gray-400">
            <p>2</p>
            <h4>Motherboard</h4>
            <Link
              href="/category/motherboard"
              className="py-3 px-3 rounded-lg bg-green-500 text-white"
            >
              {motherboard ? "Change" : "Select"}
            </Link>
          </div>
          {motherboard && (
            <div className="flex items-center justify-between ">
              <Image
                src={motherboard.image}
                alt="img"
                width={200}
                height={100}
              />
              <h4>{motherboard.title}</h4>
              <h3>Price : {motherboard.Price}</h3>
              <button
                onClick={() => dispatch(remove(motherboard))}
                className="py-3 px-5 rounded-lg bg-red-500 border-none text-white"
              >
                Remove
              </button>
            </div>
          )}
        </div>
        <div
          className="flex flex-col border"
          style={{ border: "1px solid black", padding: "10px 20px" }}
        >
          <div className="flex gap-3 items-center justify-between border-2 border-gray-400">
            <p>3</p>
            <h4>Ram</h4>
            <Link
              href="/category/ram"
              className="py-3 px-3 rounded-lg bg-green-500 text-white"
            >
              {ram ? "Change" : "Select"}
            </Link>
          </div>
          {ram && (
            <div className="flex items-center justify-between ">
              <Image src={ram.image} alt="img" width={200} height={100} />
              <h4>{ram.title}</h4>
              <h3>Price : {ram.Price}</h3>
              <button
                onClick={() => dispatch(remove(ram))}
                className="py-3 px-5 rounded-lg bg-red-500 border-none text-white"
              >
                Remove
              </button>
            </div>
          )}
        </div>
        <div
          className="flex flex-col border"
          style={{ border: "1px solid black", padding: "10px 20px" }}
        >
          <div className="flex gap-3 items-center justify-between border-2 border-gray-400">
            <p>4</p>
            <h4>Powersupply</h4>
            <Link
              href="/category/power supply"
              className="py-3 px-3 rounded-lg bg-green-500 text-white"
            >
              {powerSupply ? "Change" : "Select"}
            </Link>
          </div>
          {powerSupply && (
            <div className="flex items-center justify-between ">
              <Image
                src={powerSupply.image}
                alt="img"
                width={200}
                height={100}
              />
              <h4>{powerSupply.title}</h4>
              <h3>Price : {powerSupply.Price}</h3>
              <button
                onClick={() => dispatch(remove(powerSupply))}
                className="py-3 px-5 rounded-lg bg-red-500 border-none text-white"
              >
                Remove
              </button>
            </div>
          )}
        </div>
        <div
          className="flex flex-col border"
          style={{ border: "1px solid black", padding: "10px 20px" }}
        >
          <div className="flex gap-3 items-center justify-between border-2 border-gray-400">
            <p>5</p>
            <h4>Storage</h4>
            <Link
              href="/category/storage device"
              className="py-3 px-3 rounded-lg bg-green-500 text-white"
            >
              {storageDevice ? "Change" : "Select"}
            </Link>
          </div>
          {storageDevice && (
            <div className="flex items-center justify-between ">
              <Image
                src={storageDevice.image}
                alt="img"
                width={200}
                height={100}
              />
              <h4>{storageDevice.title}</h4>
              <h3>Price : {storageDevice.Price}</h3>
              <button
                onClick={() => dispatch(remove(storageDevice))}
                className="py-3 px-5 rounded-lg bg-red-500 border-none text-white"
              >
                Remove
              </button>
            </div>
          )}
        </div>
        <div
          className="flex flex-col border"
          style={{ border: "1px solid black", padding: "10px 20px" }}
        >
          <div className="flex gap-3 items-center justify-between border-2 border-gray-400">
            <p>6</p>
            <h4>Monitor</h4>
            <Link
              href="/category/monitor"
              className="py-3 px-3 rounded-lg bg-green-500 text-white"
            >
              {monitor ? "Change" : "Select"}
            </Link>
          </div>
          {monitor && (
            <div className="flex items-center justify-between ">
              <Image src={monitor.image} alt="img" width={200} height={100} />
              <h4>{monitor.title}</h4>
              <h3>Price : {monitor.Price}</h3>
              <button
                onClick={() => dispatch(remove(monitor))}
                className="py-3 px-5 rounded-lg bg-red-500 border-none text-white"
              >
                Remove
              </button>
            </div>
          )}
        </div>
        <div
          className="flex flex-col border"
          style={{ border: "1px solid black", padding: "10px 20px" }}
        >
          <div className="flex gap-3 items-center justify-between border-2 border-gray-400">
            <p>7</p>
            <h4>Others</h4>
            <Link
              href="/category/others"
              className="py-3 px-3 rounded-lg bg-green-500 text-white"
            >
              {others ? "Change" : "Select"}
            </Link>
          </div>
          {others && (
            <div className="flex items-center justify-between ">
              <Image src={others?.image} alt="img" width={200} height={100} />
              <h4>{others?.title}</h4>
              <h3>Price : {others?.Price}</h3>
              <button
                onClick={() => dispatch(remove(others))}
                className="py-3 px-5 rounded-lg bg-red-500 border-none text-white"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PcBuilder;
