# Generate bright colors (using HSV)

Quick 'n dirty script which increases color brightness (e.g. by 15%) for a given
set of colors using the HSV (a.k.a HSB) color space.

I used this to generate bright variants of the atom One Dark syntax color scheme
for my `Xresources`.

## Output -> ANSI Color scheme based on Atom One Dark Syntax

```
name          | hex      | rgb                | hsl                | hsv
--------------+---------+--------------------+--------------------+--------------------
black_normal  | #282C34 | rgb(40, 44, 52)    | hsl(220, 13%, 18%) | hsv(220, 23%, 20%)
black_bright  | #454C59 | rgb(69, 76, 89)    | hsl(220, 13%, 31%) | hsv(220, 23%, 35%)
red_normal    | #E06C75 | rgb(224, 108, 117) | hsl(355, 65%, 65%) | hsv(355, 52%, 88%)
red_bright    | #FF7A85 | rgb(255, 122, 133) | hsl(355, 100%, 74%)| hsv(355, 52%, 100%)
green_normal  | #98C379 | rgb(152, 195, 121) | hsl(95, 38%, 62%)  | hsv(95, 38%, 76%)
green_bright  | #B5E890 | rgb(181, 232, 144) | hsl(95, 66%, 74%)  | hsv(95, 38%, 91%)
yellow_normal | #E5C07B | rgb(229, 192, 123) | hsl(39, 67%, 69%)  | hsv(39, 46%, 90%)
yellow_bright | #FFD68A | rgb(255, 214, 138) | hsl(39, 100%, 77%) | hsv(39, 46%, 100%)
blue_normal   | #61AFEF | rgb(97, 175, 239)  | hsl(207, 82%, 66%) | hsv(207, 59%, 94%)
blue_bright   | #69BBFF | rgb(105, 187, 255) | hsl(207, 100%, 71%)| hsv(207, 59%, 100%)
magenta_normal| #C678DD | rgb(198, 120, 221) | hsl(286, 60%, 67%) | hsv(286, 46%, 87%)
magenta_bright| #E48AFF | rgb(228, 138, 255) | hsl(286, 100%, 77%)| hsv(286, 46%, 100%)
cyan_normal   | #56B6C2 | rgb(86, 182, 194)  | hsl(187, 47%, 55%) | hsv(187, 56%, 76%)
cyan_bright   | #66D9E8 | rgb(102, 217, 232) | hsl(187, 74%, 66%) | hsv(187, 56%, 91%)
white_normal  | #ABB2BF | rgb(171, 178, 191) | hsl(219, 14%, 71%) | hsv(219, 10%, 75%)
white_bright  | #CFD7E6 | rgb(207, 215, 230) | hsl(219, 31%, 86%) | hsv(219, 10%, 90%)
```

![screen](https://raw.githubusercontent.com/ch1bo/bright-colors/master/screen.png)

## Originally extracted colors:

#282C34
#98C379
#E5C07B
#61AFEF
#C678DD
#56B6C2
#ABB2BF

#3E4451
#E05252
#43D08A
#E0C285
#528BFF
#C678DD
#56B6C2
#D8DEE9

#D19A66
#33A0FF

#BE5046
#73c990
#e2c08d

#3E4451
#5C6370
#636D83
#828997
```
