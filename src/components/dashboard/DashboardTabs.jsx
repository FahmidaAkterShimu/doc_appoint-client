const DashboardTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className='flex gap-1 mt-6 border-b border-border'>
            <button
                onClick={() => setActiveTab('bookings')}
                className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer ${activeTab === 'bookings'
                    ? 'text-primary border-primary'
                    : 'text-slate-500 border-transparent hover:text-slate-600'
                    }`}
            >
                My Bookings
            </button>

            <button
                onClick={() => setActiveTab('profile')}
                className={`px-5 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-colors cursor-pointer ${activeTab === 'profile'
                    ? 'text-primary border-'
                    : 'text-slate-500 border-transparent hover:text-slate-600'
                    }`}
            >
                My Profile
            </button>
        </div>
    );
};

export default DashboardTabs;