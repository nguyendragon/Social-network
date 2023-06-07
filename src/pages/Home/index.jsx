import { News, Posts, NewPost } from './components';

function Home() {
    return (
        <div className="bg-[#18191a] flex justify-center z-10 pt-[60px]">
            {/* <div className="hidden xl:flex sticky top-0 self-start basis-1/12 w-full h-screen bg-[#242526] border-r-[2px] border-[#3e4042]"></div> */}
            <div className="w-full md:max-w-[70%] lg:max-w-[60%] xl:max-w-[35%] min-h-[1000px] basis-[46%]">
                <div className="flex flex-col items-stretch w-full h-full pt-4 px-2">
                    <News />
                    <NewPost />
                    <Posts />
                </div>
            </div>
            {/* <div className="hidden xl:flex sticky top-0 self-start basis-1/4 w-full h-screen"></div> */}
        </div>
    );
}

export default Home;
