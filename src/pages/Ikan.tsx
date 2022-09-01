import Fish from "../assets/fish.png";

export default function Ikan() {
    return (
        <>
            <div class="wrapper pb-[25vh]">
                <h1 class="text-4xl text-left title-text py-4">🐟 Ikan </h1>
                <p class="text-2xl text-justify">
                    Ikan mempunyai banyak manfaat kepada kesihatan tubuh kerana
                    ia kaya dengan kandungan asid lemak omega-3, antioksidan,
                    mineral, protein dan vitamin. Jenis ikan yang mempunyai
                    banyak khasiat untuk tubuh badan adalah ikan isi putih
                    seperti ikan bawal, ikan merah, ikan parang dan macam-macam
                    lagi.
                </p>
                <div class="flex justify-center">
                    <img
                        alt="Fish"
                        src={Fish}
                        class="text-center object-cover my-4 rounded-xl aspect-video border-4 border-accent drop-shadow-lg w-full"
                    />
                </div>
                <p class="text-2xl text-justify">
                    Selain itu, jenis ikan berminyak seperti salmon, ikan
                    kembung, tuna segar, sardin juga mengandungi khasiat-khasiat
                    yang baik untuk kesihatan. Kajian telah mendapati bahawa
                    makan ikan yang mengandungi kandungan omega-3 yang tinggi
                    boleh mengurangkan kadar lemak dan kolestrol dalam darah
                    yang boleh menyumbang kepada risiko penyakit jantung. Selain
                    itu, ia juga dapat membantu mengurangkan berat badan dan
                    mengurangkan kadar tekanan darah tinggi.
                </p>
            </div>
        </>
    );
}
