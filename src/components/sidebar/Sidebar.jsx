import React from 'react'
import './sidebar.css'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
export default function Sidebar() {
    return (
        <div className='sidebar'>
              <div className="sidebarWrapper">
                  <div className="sidebarMenu">
                      <h3 className='sidebarTitle'>Dashboard</h3>
                      <ul className="sidebarlist">
                          <li className="sidebarListItem active">
                            <ProductionQuantityLimitsIcon className='sidebarIcon'/>
                            Бүтээгдэхүүн
                          </li>
                          <li className="sidebarListItem">
                            <NewspaperIcon className='sidebarIcon'/>
                            Мэдээ мэдээлэл
                          </li>
                          <li className="sidebarListItem">
                            <GroupWorkIcon className='sidebarIcon'/>
                            Хамтран түншлэгчид
                          </li>
                          <li className="sidebarListItem">
                            <GroupWorkIcon className='sidebarIcon'/>
                            Захиалга
                          </li>
                      </ul>
                      
                  </div>
              </div>
        </div>
    )
}
