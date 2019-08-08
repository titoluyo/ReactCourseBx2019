import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

export default function GalleryContainer({images}) {
    console.log(images);
    // using index on key is a bad practice
    return <div>
        {images.map( (image, index) => (
            <Card key={index}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={`imagen ${index + 1}`}
                        image={image}
                        title={`imagen ${index + 1}`}
                        />
                </CardActionArea>
            </Card>
        ))}
    </div>
}

/*  // option 2 (original)
        {images.map( (image, index) => (
            <Card key={index}>
                <CardMedia
                    className={classes.media}
                    image={image}
                    title={'imagen ${index + 1}'}
                    />
            </Card>
        ))}
*/
/*  // option 1
        {images.map( (image, index) => (
            <div key={index}>
                <img src={image} />
            </div>
        ))}
*/