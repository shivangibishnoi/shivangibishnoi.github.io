var pymChild = null;
var pymChild = new pym.Child();



var data = [{'year': 1986, 'buildup': 4486.911117},
{'year': 1987, 'buildup': 4556.615374},
{'year': 1988, 'buildup': 4623.465988},
{'year': 1989, 'buildup': 4689.058693},
{'year': 1990, 'buildup': 4754.989229000001},
{'year': 1991, 'buildup': 4822.853329},
{'year': 1992, 'buildup': 4893.938596},
{'year': 1993, 'buildup': 4968.300148},
{'year': 1994, 'buildup': 5045.684955000001},
{'year': 1995, 'buildup': 5125.840013999999},
{'year': 1996, 'buildup': 5208.512277},
{'year': 1997, 'buildup': 5293.448748},
{'year': 1998, 'buildup': 5380.344507},
{'year': 1999, 'buildup': 5468.686936},
{'year': 2000, 'buildup': 5557.911574},
{'year': 2001, 'buildup': 5647.453894},
{'year': 2002, 'buildup': 5736.74943},
{'year': 2003, 'buildup': 5825.2336589999995},
{'year': 2004, 'buildup': 5912.253968},
{'year': 2005, 'buildup': 5996.805224},
{'year': 2006, 'buildup': 6077.794164},
{'year': 2007, 'buildup': 6154.127508},
{'year': 2008, 'buildup': 6224.712015},
{'year': 2009, 'buildup': 6288.454404},
{'year': 2010, 'buildup': 6346.0266919999995},
{'year': 2011, 'buildup': 6405.161962},
{'year': 2012, 'buildup': 6475.358598000001},
{'year': 2013, 'buildup': 6566.114957},
{'year': 2014, 'buildup': 6686.929404},
{'year': 2015, 'buildup': 6847.300313}
]

var winwidth = parseInt(d3.select('#chart-body-4').style('width'))

var winheight = parseInt(d3.select('#chart-body-4').style('height'))


var ƒ = d3.f

var sel = d3.select('#chart-body-4').html('')
var c = d3.conventions({
  parentSel: sel, 
  totalWidth: winwidth, 
  height:  250, 
  margin: {left: 50, right: 50, top: 5, bottom: 30}
})

pymChild.sendHeight();

c.svg.append('rect').at({width: c.width, height: c.height, opacity: 0})

c.svg.append('circle').attr('cx',c.totalWidth*.11-5).attr('cy',c.height*.505).attr('r', 5).attr('class', 'intro-dot')

c.svg.append('text').attr('x',c.totalWidth*.12-5).attr('y',c.height*.490).text('Start dragging here').attr('class','intro-text')


c.x.domain([1986, 2015])
c.y.domain([2400, 6900])

c.xAxis.ticks(4).tickFormat(ƒ())
c.yAxis.ticks(5).tickFormat(d =>  d3.format(",.3r")(d))

var area = d3.area().x(ƒ('year', c.x)).y0(ƒ('buildup', c.y)).y1(c.height)
var line = d3.area().x(ƒ('year', c.x)).y(ƒ('buildup', c.y))

var clipRect = c.svg
  .append('clipPath#clip-4')
  .append('rect')
  .at({width: c.x(1986)-2, height: c.height})

var correctSel = c.svg.append('g').attr('clip-path', 'url(#clip-4)')

correctSel.append('path.area').at({d: area(data)})
correctSel.append('path.line').at({d: line(data)})
yourDataSel = c.svg.append('path#your-line-4').attr('class', 'your-line')

c.drawAxis()


yourData = data
  .map(function(d){ 
    return {year: d.year, buildup: d.buildup, defined: 0} })
  .filter(function(d){
    if (d.year == 1990) d.defined = true
    return d.year >= 1990
  })


var completed = false

var drag = d3.drag()
  .on('drag', function(){
    d3.selectAll('.intro-text').style('visibility', 'hidden')
    var pos = d3.mouse(this)
    var year = clamp(1986, 2015, c.x.invert(pos[0]))

    var buildup = clamp(0, c.y.domain()[1], c.y.invert(pos[1]))

    yourData.forEach(function(d){
      if (Math.abs(d.year - year) < .5){
        d.buildup =  buildup
        d.defined = true
      }
    })

    yourDataSel.at({d: line.defined(ƒ('defined'))(yourData)})

    if (!completed && d3.mean(yourData, ƒ('defined')) == 1){
      completed = true
      clipRect.transition().duration(1000).attr('width', c.x(2015))
      d3.select('#answer-4').style('visibility', 'visible').html("<div><em>You guessed <p class='your-pink'>"+ d3.format(",.3r")(yourData[yourData.length-1].buildup) + "</p> square kilometers for 2015.</div><div>The real value was <p class='your-pink'>"+d3.format(",.3r")(data[29].buildup)+"</p> square kilometers </em></div>")
      d3.select('#explain-4').style('visibility', 'visible').style('opacity', 1)
      pymChild.sendHeight();

    }
  })

c.svg.call(drag)



function clamp(a, b, c){ return Math.max(a, Math.min(b, c)) }