# percipio-nav
Learning NativeBase!


Hey y'all! Fun project! I got to learn all the things about NativeBase (and how to make it work for Web and Vite). This is my first time using NativeBase concepts, as I'm usually a material UI person.

A few things to point out:

- I could not find exact icons with the react native vector icon library that I was asked to use. I tried my best to pick similar alternatives (also icon font weight / stroke widths were not supported with this lib)
- The mocks looked like the entire account row was clickable, so I wasn't entirely sure why there was a 3 dot upon expansion: added it anyway! (easily modified)
  - I'm going to guess this might get weird with extra long names and locations: def on the list of things I'd add to handle later
- I usually alias my directories (aka no relative pathing) on larger projects. If I were asked to expand upon this, I would start by adding those aliases for scaling purposes.
- Speaking of scaling, if the nav gets more requests, I'd probably look at splitting out the menu logic to keep the navigation.tsx file clean
- I will happily set up testing upon request

If you have any questions please reach out. To run locally simply:
`yarn install`
`yarn start`

There is a linter to run if desired:
`yarn run lint`

Project builds with
`yarn run build`
