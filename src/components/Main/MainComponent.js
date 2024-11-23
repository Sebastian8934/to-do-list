import React,{ useState } from 'react'

const drawerWidth = 240;

function MainComponent() {

    const [open, setOpen] = useState(false);

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme }) => ({
          flexGrow: 1,
          padding: theme.spacing(3),
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          marginLeft: `-${drawerWidth}px`,
          variants: [
            {
              props: ({ open }) => open,
              style: {
                transition: theme.transitions.create('margin', {
                  easing: theme.transitions.easing.easeOut,
                  duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
              },
            },
          ],
        }),
    );

  return (
    <>
    <Main open={open}>

    </Main>
    </>
  )
}

export default MainComponent