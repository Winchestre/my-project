import propTypes from 'prop-types';
import Sidebar from './Sidebar';

const Mainlayout = ({ children }) => {
    return (
        <div className="bg-[--bg-light]">
        <Sidebar />
        <div className="p-6 ml-auto w-[calc(100%-280px)]">
            <main className="">
                {children}
            </main>
        </div>
        </div>
    )
};

Mainlayout.propTypes = {
    children: propTypes.node.isRequired,
};
export default Mainlayout;