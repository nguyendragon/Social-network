import { News, PostItem, NewPost } from '../../components';

function Home() {
    return (
        <div className="bg-[#18191a] flex justify-center z-10 pt-[60px]">
            {/* <div className="hidden xl:flex sticky top-0 self-start w-full h-screen bg-[#242526] border-r-[2px] border-[#3e4042]"></div> */}
            <div className="w-full md:w-2/3 lg:w-2/4 xl:w-2/5 2xl:w-2/6 2xl:max-w-[680px]">
                <div className="flex flex-col items-stretch w-full h-full pt-4 px-2">
                    <News />
                    <NewPost />
                    <PostItem />
                </div>
            </div>
            {/* <div className="hidden xl:flex sticky top-0 self-start w-full h-screen bg-[#242526] border-l-[2px] border-[#3e4042]"></div> */}
        </div>
    );
}

export default Home;
