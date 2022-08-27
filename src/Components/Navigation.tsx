import { Link } from "@solidjs/router";

export default function Navigation() {
    return (
        <>
            {/* Navigation */}
            <div class="hidden lg:block fixed bottom-2 left-2">
                <div class="bg-[#291334] text-[#FAF7F5] p-4 rounded-xl">
                    <label for="theTeam" class="cursor-pointer modal-button">
                        <i
                            class="fa-xl fa-solid fa-people-group"
                            title="The Team"
                        ></i>
                    </label>

                    <span class="border-[1px] bg-[#FAF7F5] border-[#FAF7F5] mx-4"></span>
                    <Link
                        href="/"
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
                <div class="bg-[#291334] text-[#FAF7F5] p-8 rounded-xl">
                    <label for="theTeam" class="cursor-pointer modal-button">
                        <i
                            class="fa-2xl fa-solid fa-people-group"
                            title="The Team"
                        ></i>
                    </label>
                    <span class="border-[1px] bg-[#FAF7F5] border-[#FAF7F5] mx-4"></span>
                    <Link
                        href="/"
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
                        The Team
                    </h3>
                    <p class="py-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Quasi obcaecati quos hic quidem recusandae facere!
                        Quidem aperiam eligendi voluptas animi. Magnam culpa ad
                        dolore. Quis iste consectetur rem eius. Aut!
                    </p>
                    <div class="modal-action">
                        <label for="theTeam" class="btn">
                            close
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}
