import Khasiat from "../assets/Khasiat.png";

export default function App() {
    return (
        <>
            <div class="wrapper">
                <h1 class="text-4xl text-left title-text py-4">🌻 Khasiat</h1>
                <p class="text-2xl text-left">
                    Pelbagai haiwan di Paya Bakau boleh dimakan oleh kita.
                    Haiwan-haiwan ini terdapat khasiat & nutrisi yang sesuai
                    untuk dimakan oleh kita.
                </p>
                <img
                    src={Khasiat}
                    class="object-cover my-4 rounded-xl aspect-video border-4 border-neutral drop-shadow-lg"
                />
            </div>
        </>
    );
}
