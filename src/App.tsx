import { Routes, Route, Link } from "@solidjs/router";
import { createSignal, Show } from "solid-js";

// Pages
import Khasiat from "./pages/Khasiat";
import Ketam from "./pages/Ketam";
import Ikan from "./pages/Ikan";
import Udang from "./pages/Udang";
import Cover from "./pages/Cover";

export default function App() {
    const [open, setOpen] = createSignal(true);

    return (
        <>
            <Show when={open() == true}>
                <div class="fixed w-full p-4 jump-animation">
                    <div
                        class="alert alert-info shadow-lg"
                        onclick={() => setOpen(false)}
                    >
                        <div>
                            <span>
                                <div>
                                    <p class="">
                                        <i class="fa-solid fa-circle-info fa-xl pr-2"></i>
                                        The KMR Project has ended at 2
                                        <sup>nd</sup>
                                        September 2022
                                    </p>
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </Show>

            <Routes>
                <Route path="/" component={Cover} />
                <Route path="/khasiat" component={Khasiat} />
                <Route path="/ketam" component={Ketam} />
                <Route path="/ikan" component={Ikan} />
                <Route path="/udang" component={Udang} />
            </Routes>

            {/* Navigation */}
            <div class="hidden lg:block fixed bottom-8 left-8">
                <div class="bg-[#291334] text-[#FAF7F5] p-4 rounded-xl">
                    <label
                        for="theTeam"
                        class="cursor-pointer modal-button tooltip tooltip-primary text-2xl"
                        data-tip="Pengenalan"
                    >
                        👓
                    </label>

                    <span class="border-[1px] bg-[#FAF7F5] border-[#FAF7F5] mx-4"></span>
                    <Link
                        href="/khasiat"
                        class="text-2xl tooltip tooltip-primary"
                        data-tip="Khasiat"
                    >
                        🌻
                    </Link>

                    <span class="border-[1px] bg-[#FAF7F5] border-[#FAF7F5] mx-4"></span>
                    <Link
                        href="/ikan"
                        class="text-2xl tooltip tooltip-primary"
                        data-tip="Ikan"
                    >
                        🐟
                    </Link>
                    <span class="border-[1px] bg-[#FAF7F5] border-[#FAF7F5] mx-4"></span>
                    <Link
                        href="/ketam"
                        class="text-2xl tooltip tooltip-primary"
                        data-tip="Ketam"
                    >
                        🦀
                    </Link>
                    <span class="border-[1px] bg-[#FAF7F5] border-[#FAF7F5] mx-4"></span>
                    <Link
                        href="/Udang"
                        class="text-2xl tooltip tooltip-primary"
                        data-tip="Udang"
                    >
                        🦐
                    </Link>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div class="block fixed lg:hidden bottom-2 left-2 right-2 float-left">
                <div class="bg-[#291334] text-[#FAF7F5] p-4 rounded-xl">
                    <label
                        for="theTeam"
                        class="cursor-pointer modal-button tooltip tooltip-primary text-2xl"
                        data-tip="Pengenalan"
                    >
                        👓
                    </label>
                    <span class="border-[1px] bg-[#FAF7F5] border-[#FAF7F5] mx-4"></span>
                    <Link
                        href="/khasiat"
                        class="text-2xl tooltip tooltip-primary"
                        data-tip="Khasiat"
                    >
                        🌻
                    </Link>

                    <span class="border-[1px] bg-[#FAF7F5] border-[#FAF7F5] mx-4"></span>
                    <Link
                        href="/ikan"
                        class="text-2xl tooltip tooltip-primary"
                        data-tip="Ikan"
                    >
                        🐟
                    </Link>
                    <span class="border-[1px] bg-[#FAF7F5] border-[#FAF7F5] mx-4"></span>
                    <Link
                        href="/ketam"
                        class="text-2xl tooltip tooltip-primary"
                        data-tip="Ketam"
                    >
                        🦀
                    </Link>
                    <span class="border-[1px] bg-[#FAF7F5] border-[#FAF7F5] mx-4"></span>
                    <Link
                        href="/Udang"
                        class="text-2xl tooltip tooltip-primary"
                        data-tip="Udang"
                    >
                        🦐
                    </Link>
                </div>
            </div>

            {/* The Team Modal */}
            <input type="checkbox" id="theTeam" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="text-center title-text font-bold text-2xl">
                        Pengenalan
                    </h3>
                    <p class="py-4">
                        Kami dari kelas 2 Kinabalu telah menyediakan website ini
                        yang bertajuk "Khasiat Haiwan Hutan Paya Bakau". Ahli
                        kumpulan kita terdiri daripada 8 orang iaitu:
                    </p>
                    <ul class="font-bold">
                        <li
                            class="tooltip tooltip-primary cursor-pointer"
                            data-tip="Leader"
                        >
                            ➥ Sree Vaishnavi
                        </li>
                        <li
                            class="tooltip tooltip-primary cursor-pointer"
                            data-tip="Writer"
                        >
                            ➥ Pavenpreet Singh
                        </li>
                        <li>➥ Low Zi Xuan </li>
                        <li>➥ Yang Zheng Yong</li>
                        <li>➥ Tan Zhi Quan </li>
                        <li>➥ Ooi Sze Ling </li>
                        <li>➥ Wong Wei Zhen </li>
                        <li>➥ Chew Ying Vern</li>
                    </ul>
                    <div class="modal-action">
                        <label for="theTeam" class="btn w-full">
                            Close
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}
function useRef(arg0: null) {
    throw new Error("Function not implemented.");
}
