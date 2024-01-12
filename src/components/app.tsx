import { Accordion, AccordionItem, AccordionItemContent, AccordionItemTrigger } from '../components/ui/accordion';
import { Button } from '~/components/ui/button';
import { Slider, SliderControl, SliderRange, SliderThumb, SliderTrack } from '~/components/ui/slider';

export const App = () => {
  return (
    <div style={{padding: '4px'}}>
      <Accordion defaultValue={['button', 'slider', 'button2']} multiple>
        <AccordionItem value="button">
          <AccordionItemTrigger>
            Item with button
          </AccordionItemTrigger>
          <AccordionItemContent>
            <div>
              <div style={{padding: '4px'}}>
                <Button>
                  Button
                </Button>
              </div>
            </div>
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem value="slider">
          <AccordionItemTrigger>
            Item with slider
          </AccordionItemTrigger>
          <AccordionItemContent>
            <div>
              <Slider max={100} min={0} value={[33, 66]}>
                <SliderControl>
                  <SliderTrack>
                    <SliderRange/>
                  </SliderTrack>
                  <SliderThumb index={0}/>
                  <SliderThumb index={1}/>
                </SliderControl>
              </Slider>
            </div>
          </AccordionItemContent>
        </AccordionItem>
        <AccordionItem value="button2">
          <AccordionItemTrigger>
            Item with button 2
          </AccordionItemTrigger>
          <AccordionItemContent>
            <div>
              <div style={{padding: '4px'}}>
                <Button>
                  Button 2
                </Button>
              </div>
            </div>
          </AccordionItemContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
