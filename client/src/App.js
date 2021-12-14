import React, { useState, useEffect } from 'react'
import { Container, Typography, AppBar, Grow, Grid } from '@material-ui/core'
import Memories from './images/memories.png'
import Posts from './components/Posts/Posts'
import Form from './components/Form/Form'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'

const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])
  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h4' align='center'>
          Memories
        </Typography>
        <img
          className={classes.image}
          src={Memories}
          alt='Memories'
          height='35'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justifyContent='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid xs={12} sm={7} item={true}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid xs={12} sm={4} item={true}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}

export default App
