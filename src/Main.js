import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const players = [
    {
        id: 0,
        name: 'Fouchimi Ousmane',
        position: 'Software engineer'
    },
    {
        id: 1,
        name: 'Muhammad SW',
        position: 'Prophet of Allah'
    }
]

const Player = (props) => {
    const player = players.filter(p => p.id === parseInt(props.match.params.id, 10))[0];

    if(!player) {
        return <div>Sorry, but the player was not found! </div>;
    }

    return (
        <div>
            <h1>{player.name} (#{player.id})</h1>
            <h2>{player.position}</h2>
        </div>
    );
}

const FullRoster = () => (
    <div>
        <ul>
            {
                players.map(p => (
                    <li key={p.id}>
                       <Link to={`/roster/${p.id}`}>{p.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
);

const Roster = () => (
    <div>
        <h2>This is a roster page!</h2>
        <Switch>
            <Route exact path='/roster' component={FullRoster} />
            <Route path='/roster/:id' component={Player} />
        </Switch>
    </div>
);

const Schedule = () => (
    <div>
        <ul>
            <li>6/5 @ Evergreens</li>
            <li>6/8 vs Kickers</li>
            <li>6/14 @ United </li>
        </ul>
    </div>
);

const Home = () => (
    <div>
        <h1>Welcome to the Tornadoes Website!</h1>
    </div>
);

export const  Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/roster' component={Roster} />
            <Route path="/schedule"  component={Schedule} />
        </Switch>
    </main>
);