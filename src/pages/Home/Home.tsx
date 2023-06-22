import React from 'react'
import styles from './Home.module.css'
import Layout from '../../components/Layout/Layout'
import { folders } from '../../constants/folderData';
import { Card, CardContent, Grid, Typography } from '@mui/material';

const Home = () => {
  const user: number = 1;
  return (
    <div className={styles.Home}>
      <Layout user={user} title='Folders'>
        {user === 1 && (
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {folders.map((folder, index) => {
              return (
                <Grid item xs={6} md={3} key={index} >
                  <Card sx={{ aspectRatio: 3 / 2, backgroundColor: "#FFF0E8" }}>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                      <Typography variant='h5' gutterBottom sx={{ fontWeight: "500" }}>{folder.name}</Typography>
                      <Typography variant='h6' gutterBottom sx={{ fontWeight: "400" }}>{folder.count}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              )
            })}
          </Grid>
        )}
      </Layout>
    </div>
  )
}

export default Home
