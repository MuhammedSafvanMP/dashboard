"use client"

import { Box, Grid, Paper, Typography, Skeleton } from "@mui/material"

export default function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard Overview
      </Typography>
      <Grid container spacing={3}>
       
        {[
          { title: "Total Users", value: "1,234" },
          { title: "Active Projects", value: "42" },
          { title: "Revenue", value: "$12,345" },
          { title: "Conversion Rate", value: "12.3%" },
        ].map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Paper
              elevation={2}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                height: 140,
                borderRadius: 2,
              }}
            >
              <Typography color="textSecondary" gutterBottom>
                {stat.title}
              </Typography>
              <Typography variant="h4" component="div" sx={{ fontWeight: "medium", mt: 2 }}>
                {stat.value}
              </Typography>
            </Paper>
          </Grid>
        ))}

        {/* Chart Section */}
        <Grid item xs={12} md={8}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              height: 300,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Monthly Revenue
            </Typography>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Skeleton variant="rectangular" width="100%" height={200} />
            </Box>
          </Paper>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={4}>
          <Paper
            elevation={2}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              height: 300,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>
            <Box sx={{ mt: 2 }}>
              {[1, 2, 3, 4].map((item) => (
                <Box key={item} sx={{ mb: 2 }}>
                  <Skeleton variant="text" width="100%" />
                  <Skeleton variant="text" width="60%" />
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

