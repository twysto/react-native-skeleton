'use strict'
import React, { Component } from 'react'
import { AppRegistry, Text } from 'react-native'
import ViewContainer from './app/common/components/ViewContainer/ViewContainer'
import styles from './app/common/styles/styles'

class ReactNativeSkeleton extends Component {
  render() {
    return (
      <ViewContainer style={styles.rootView}>
        <Text>{`Hello World!`}</Text>
      </ViewContainer>
    )
  }
}

AppRegistry.registerComponent('ReactNativeSkeleton', () => ReactNativeSkeleton)
