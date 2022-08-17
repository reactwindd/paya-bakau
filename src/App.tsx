export default function App() {
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

                    <div class="border-[1px] bg-[#FAF7F5] border-[#FAF7F5] my-4"></div>
                    <i class="fa-xl fa-solid fa-people-group"></i>
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
                    <i class="fa-2xl fa-solid fa-people-group"></i>
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
            <div class="wrapper">
                <h1 class="text-4xl text-center title-text py-4">
                    Lorem Ipsum
                </h1>
                <p class="text-2xl text-left">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quod provident rerum alias? Voluptate reiciendis nulla
                    voluptates! Praesentium voluptates illum deserunt rem libero
                    minus, veritatis similique, repellat inventore ad explicabo.
                    Odio!
                </p>
            </div>
        </>
    );
}
