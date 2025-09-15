import React from "react";

const FavoriteQuotes = ({ favoriteQuotes, maxFaves }) => {

    return (
        <section class='favorite-quotes'>
          <div className= "wrapper quotes">
            <h3>Top 3 favorite quotes</h3>
            {favoriteQuotes.length >= 0 && JSON.stringify(favoriteQuotes)}
            </div>
        </section>
    )

}

export default FavoriteQuotes;