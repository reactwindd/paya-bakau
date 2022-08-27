import Crab from "../assets/crab.png";

export default function Ketam() {
    return (
        <>
            <div class="wrapper pb-[25vh]">
                <h1 class="text-4xl text-left title-text py-4">🦀 Ketam</h1>
                <p class="text-2xl text-left">
                    Terdapat pelbagai khasiat dan vitamin yang terdapat dalam
                    ketam yang baik untuk tubuh badan kita. Antaranya, Zat
                    kuprum merupakan salah satu jenis mineral yang sangat baik
                    untuk memelihara fungsi organ tubuh, salah satunya adalah
                    meningkatkan produksi sel darah merah. Dengan pengambilan
                    ketam, ia dapat meningkatkan peredaran darah, serta mengawal
                    penyebaran oksigen dalam tubuh. Untuk memelihara kesihatan
                    dan kekuatan tulang, tubuh memerlukan protein yang berasal
                    dari makanan.
                </p>
                <div class="flex justify-center">
                    <img
                        src={Crab}
                        class="text-center object-cover my-4 rounded-xl aspect-video border-4 border-accent drop-shadow-lg"
                    />
                </div>
                <p class="text-2xl text-left">
                    Daging ketam merupakan salah satu bahan makanan yang tinggi
                    akan protein. Tidak hanya dengan itu, daging ketam juga
                    dikenal mengandungi zat fosfor yang berperanan penting dalam
                    melindungi tubuh dari pelbagai penyakit seperti
                    osteoporosiss serta radang sendi. Diperkaya dengan pelbagai
                    nutrisi, vitamin B2, asid lemak omega 3, isi ketam sangat
                    baik untuk memelihara sistem saraf dalam tubuh terutama
                    otak. Isi ketam juga bermanfaat untuk melindungi sistem
                    saraf, mengurangi peradangan dan plak pada saluran saraf,
                    serta menjaga mental agar sentiasa sihat dan cergas.
                </p>
            </div>
        </>
    );
}
