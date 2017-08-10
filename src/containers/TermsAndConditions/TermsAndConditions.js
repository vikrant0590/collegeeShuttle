import React,{ Component } from 'react';
import { Text, View,  } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Title, Button, Icon, Card} from 'native-base';
import {Actions } from 'react-native-router-flux';
import styles from './TermsAndConditionsStyle';
import {Colors, Fonts } from '../../theme';



export default class TermsAndConditions extends Component {

  onPressGoBack = () =>{
    Actions.pop();
  };
  render() {
    return(
      <Container style={{flex:1, backgroundColor:Colors.base,}}>
        <Header style={{backgroundColor:Colors.headerColor,borderBottomWidth:0}}>
          <Left>
            <Button transparent onPress={this.onPressGoBack}>
              <Icon name="arrow-back" style={{color:'white'}}/>
            </Button>
          </Left>
          <Body>
            <Title style={{color: Colors.white, ...Fonts.style.title,marginLeft:-25,marginRight:-34 }}>
            Terms and Conditions
            </Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Card
            style={{
              flex: 1,
              marginTop: 15,
              marginLeft: 10,
              marginRight: 10,
              marginBottom:15
            }}>
            <View style={styles.containerbox}>
              <Text style={styles.heading}>Luggage Policy:
                <Text style={styles.descriptionText}>
                  {' '}College Shuttles will accept up to one piece of luggage per passenger.
                  For guidance this should be no more than the size of a small duffel or Gym bag.
                  Passengers can also take on board one small laptop or book bag that must fit either
                  on their lap or under the seat in front of you. Please be advised that passengers
                  wishing to travel with more luggages may have items refused, depending on the
                  availability of space. Passengers are able to pay for additional luggage when
                  making a reservation.
                </Text>
              </Text>
              <Text style={styles.heading}>
                Refund Policy:
                <Text style={styles.descriptionText}>
                  {' '}Once a nonrefundable ticket is completed, College Shuttles reservations cannot be refunded.
                    Changing your reservation date 48 hours before your trip is possible with a $15 fee.
                    Once within 48 hours of the trip changes can be made with a fee of $36. Changes to a
                    trip can no be made once the reservation date has passed.
                </Text>
              </Text>
              <Text style={styles.descriptionText}>
                We will make every effort to operate College Shuttle services as scheduled.
                  Reservations on shuttles which are delayed due to situations out of our control
                  will not be refunded. Refundable tickets can be refunded or transferred to another
                  trip of the same value during the same semester. All questions should be emailed to {' '}
                <Text style={styles.mailAdressText}>
                  support@collegeshuttles.com
                </Text>
              </Text>
              <Text style={styles.heading}>
                Confirmations:
                <Text style={styles.descriptionText}>
                  {' '}Confirmations we be sent to the email you provide while making your reservation.
                    A reservation Number will be included in your confirmation email. Having your reservation
                    number and confirmation email when getting on the College Shuttles
                    will make the boarding process much easier.
                </Text>
              </Text>
              <Text style={styles.heading}>
                How does your boarding process work?
                <Text style={styles.descriptionText}>
                  {' '}Please arrive at the pickup point a minimum of 15 minutes before departure.
                    Please bring your student Identification or have your email confirmation available
                    on your mobile device. You will need to show your ID or email confirmation to your
                    driver as this will act as your boarding pass. When boarding please have your email
                    confirmation either printed or on a mobile device and a school ID.
                    You can sit on a seat of your choice.
                </Text>
              </Text>
              <Text style={styles.heading}>
                  Pick up locations: / pick up times:
                <Text style={styles.descriptionText}>
                  {' '}Passengers should arrive outside the Pick Up location at least 15 minutes before
                    schedule time. When picking up on campus passengers should wait outside their
                    residence building. Pick up times are scheduled to be as convenient possible
                    for students and parents. In a case where our shuttles are delayed due to traffic,
                    accidents, weather or situations out of our control we will update all customers one
                    of the following ways; Phone call, Email, Twitter or Facebook.
                </Text>
                <Text style={styles.heading}>
                  {' '}Shuttles will wait 10 minutes before leaving each location.{' '}
                </Text>
                <Text style={styles.descriptionText}>
                    For example if pick up is 3:30pm shuttle will leave at 3:40pm.
                    Missing your shuttle Once the shuttle arrives for a pick up time,
                    the driver will wait 10 minutes for all customers. All customers
                    that are delayed should let us know as soon as possible. Any passenger
                    that does not make the shuttle on the scheduled time will not receive a
                    refund or be able to transfer a ticket. Once a shuttle has left campus or
                    a pick up location in a major city, the shuttle will not stop until the next
                    pick up or drop off location. Email{' '}
                  <Text style={styles.mailAdressText}>
                   support@collegeshuttles.com
                  </Text> if any questions
                    Miss your drop off location If you forget to exit the shuttle on your scheduled
                    drop off location, you will be able to get dropped off at the next stop. Notify
                    the driver as soon as possible. If there is no drop off location within a 45-minute
                    radius, the driver will make an attempt to stop at a closer safe location to drop you
                    off. If there are customers on board and the driver believes it will be disruptive to
                    customers the decision can me made to not stop until the next scheduled stop.
                    If your driver does not stop at your scheduled stop please let the driver know
                    as soon as possible and he or she will make the necessary arrangements to make
                    sure you get to your location.
                </Text>
              </Text>
              <Text style={styles.heading}>
                  What happens when my scheduled shuttle is cancelled?
                <Text style={styles.descriptionText}>
                  {' '}We will make every effort to operate our published schedules. Events will happen both
                    within our control and beyond our control that may cause us to cancel schedules.
                    A cancellation for any reason will allow you to request a refund or reschedule your
                    trip at no charge to you. If the cancellation was our fault we reserve the right
                    (at our discretion) to give you something and beg for your forgiveness.
                    If you have provided us with a contact number (cell phone or other) we will
                    contact you the moment we know the schedule is cancelled. If you choose not to
                    provide us a cell phone just send us an email at{' '}
                  <Text style={styles.mailAdressText}>
                    support@collegeshuttles.com
                  </Text> and we will contact you to rebook your reservation.
                </Text>
              </Text>
              <Text style={styles.zoomText}>
                  While on the shuttle passengers are expected to always be seating in a seat and
                  enjoying the ride. If a passenger needs to stop they should let the driver know
                  immediately and ask for short break. Drivers are permitted to make a rest stop for
                  trips scheduled to take longer than 4 hours. Depending on the Shuttle passengers will
                  have the option to watch a movie, listen to music, or talk with their peers. Disruptive
                  behavior on a shuttle In a situation where a passenger is disruptive and not listening
                  to the drivers orders the driver has the right to ask the passenger to leave the shuttle.
                  If the problem continues authorities will be contacted and the passengers information will
                  be provided. A passenger that is asked to leave because of disruptive behavior will not be given
                  a refund or transferable ticket. Be respectful of your fellow peers riding the College Shuttles
                  While on the College Shuttles, passengers are expected to be respectful to other passengers.
                  Customers should not play loud music, talk loudly in person or over the phone. Passengers
                  who are making other passengers uncomfortable will be asked to stop. If the behavior
                  continues authorities will be called and passenger information will be provided.
                  If legal action is necessary to collect monies due, you will be responsible for
                  all court court costs, our attorney fees and the balance due. Also, any damages
                  caused to the vehicle by client or their guests, will result in a minimum charge
                  of $ 100.00, based on cost of damage. Any person or persons that get sick in a vehicle,
                  also will be charged a minimum fee of $ 250.00 (final cost is charged
                  when bill is received from detail shop).
              </Text>
            </View>
          </Card>
        </Content>
      </Container>
    )
  }
}


