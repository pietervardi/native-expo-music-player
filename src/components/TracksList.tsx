import { utilsStyles } from '@/styles'
import { FlatList, FlatListProps, View } from 'react-native'
import { Track } from 'react-native-track-player'
import { TrackListItem } from './TrackListItem'

export type TracksListProps = Partial<FlatListProps<Track>> & {
	tracks: Track[]
}

const ItemDivider = () => {
	return <View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }}></View>
}

export const TracksList = ({ tracks, ...flatlistProps }: TracksListProps) => {
	const handleTrackSelect = (track: Track) => {
		console.log(track)
	}

	return (
		<FlatList
			data={tracks}
			contentContainerStyle={{ paddingTop: 10, paddingBottom: 128 }}
			ListFooterComponent={ItemDivider}
			ItemSeparatorComponent={ItemDivider}
			renderItem={({ item: track }) => (
				<TrackListItem track={track} onTrackSelect={handleTrackSelect} />
			)}
			{...flatlistProps}
		/>
	)
}
