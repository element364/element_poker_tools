import React from 'react'

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import { Link } from 'react-router'

class TopNavBar extends React.Component {
	render () {
		return (
			<Navbar inverse>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Mega poker app</a>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavDropdown eventKey={1} title="Нэш чарты" id="basic-nav-dropdown">
							<MenuItem eventKey={1.1}>
								<Link to="/nash">Нэш чарты MTT</Link>
							</MenuItem>
							<MenuItem eventKey={1.2}>
								<Link to="/nashSpin">Нэш чарты Spin</Link>
							</MenuItem>
							<MenuItem eventKey={1.3}>
								<Link to="/nashHA">Нэш чарты HA</Link>
							</MenuItem>
						</NavDropdown>
						<li role="presentation">
							<Link to="/hand_equity">Equity</Link>
						</li>
					</Nav>
					<Nav pullRight>
						<NavItem eventKey={1} href="#">Link Right</NavItem>
						<NavItem eventKey={2} href="#">Link Right</NavItem>
						<NavDropdown eventKey={3} title="Теория" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>
								<Link to="/theory_rol_matematiki_v_pokere">Роль математики в покере</Link>
							</MenuItem>
							<MenuItem eventKey={3.2}>
								<Link to="/theory_shansi_banka_i_rachet_ekviti">Шансы банка и расчет эквити</Link>
							</MenuItem>
							<MenuItem eventKey={3.3}>
								<Link to="/theory_sovety_v_obuchenii">Советы в обучении</Link>
							</MenuItem>
							<MenuItem eventKey={3.4}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.5}>Separated link</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default TopNavBar