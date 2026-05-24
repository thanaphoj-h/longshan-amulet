import { menuItems } from '../../data/menu'
import './Sidebar.css'

function Sidebar() {
    return (
        <aside className='sidebar border-end'>
            <div className='sidebar-logo border-bottom'>
                LOGO
            </div>
            <div className='sidebar-menu-list'>
                {menuItems.map((item) => (
                    <button key={item.id} className='btn btn-outline-dark sidebar-menu-buton'>
                        {item.label}
                    </button>
                ))}
            </div>
        </aside>
    )
}

export default Sidebar