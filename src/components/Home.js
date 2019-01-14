import React, { Component } from 'react';

import DotaLogo from '../assets/images/logo_dota.png'
import HeroesData from '../data/Heroes';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Home extends Component {
    constructor(props) {
        super(props);

        // this.getDotaHeroes = this.getDotaHeroes.bind(this);
    }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        {
                            HeroesData.all().map(
                                data => (
                                    <Grid item xs={3}>
                                        <Paper className={classes.paper}>
                                            <div className="img-paper">
                                                <img 
                                                    src={data.img ? data.img : DotaLogo}
                                                    className={ !data.img ? 'margin-img-paper' : ''} 
                                                />
                                            </div>
                                            <div>
                                                Nombre: {data.name}
                                            </div>
                                            <div>
                                                Atributo principal: {data.primary_attr}
                                            </div>
                                            <div>
                                                Tipo de Ataque: {data.attack_type}
                                            </div>
                                        </Paper>
                                    </Grid>
                                )
                            )
                        }
                    </Grid>
                </div>
            </div>
        )
    }

}

export default withStyles(styles)(Home);