import Khasiat from "../assets/Khasiat.png";

export default function App() {
    return (
        <>
            <div class="wrapper pb-[25vh]">
                <h1 class="text-4xl text-left title-text py-4">🌻 Khasiat</h1>
                <p class="text-2xl text-left">
                    Pelbagai haiwan di Paya Bakau boleh dimakan oleh kita.
                    Haiwan-haiwan ini terdapat khasiat & nutrisi yang sesuai
                    untuk dimakan oleh kita.
                </p>
                <div class="flex justify-center">
                    <img
                        src={Khasiat}
                        class="text-center object-cover my-4 rounded-xl aspect-video border-4 border-accent drop-shadow-lg"
                    />
                </div>
            </div>
        </>
    );
}
