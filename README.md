# geojsons-euroglobalmap
GeoJSONS data from EuroGlobalMap

# attribution
This product includes Intellectual Property from European National Mapping and Cadastral Authorities and is licensed on behalf of these by EuroGeographics. Original product is freely available at eurogeographics.org. Terms of the licence available at https://eurogeographics.org/products-and-services/open-data/topographic-data/

# what is the source data
`EGM_2019_SHP_20190312.zip`

# where are the data?
The data are in `xa?` such as xaa, xab, ..., xat. These are [GeoJSONS](https://tools.ietf.org/html/rfc8142) extracted from EuroGlobalMap.

Therefore, if you want to see the data, please execute `cat xa?`.

# how to build the data from EuroGlobalMap
1. Download the EuroGlobalMap Shapefile data package and extract it into src.
2. `yarn`
3. `rake build | split -l 50000`

# modification by modify.js
## attributes dropped
- inspireId
- beginLifeS
- SHN0
- SHN1
- SHN2
- SHN3
- SHN4
- HydroID
- PopulatedPlaceID
- FerryID
- FStationID
- RStationID
- Shape_Area
- SHAPE_Leng
- Shape_Leng

## attributes made lower case
- NLN1
- NLN2
- DNLN

# a note on the size of files
## file size without modify.js
- 874MB without compression
- 179MB after gzip compression

## file size after applying modify.js
- 545MB without compression
- 132MB after gzip compression

## upload log
```console
$ git push origin master
Enumerating objects: 27, done.
Counting objects: 100% (27/27), done.
Delta compression using up to 4 threads
Compressing objects: 100% (24/24), done.
Writing objects: 100% (24/24), 120.15 MiB | 283.00 KiB/s, done.
Total 24 (delta 15), reused 0 (delta 0)
remote: Resolving deltas: 100% (15/15), completed with 2 local objects.
remote: warning: GH001: Large files detected. You may want to try Git Large File Storage - https://git-lfs.github.com.
remote: warning: See http://git.io/iEPt8g for more information.
remote: warning: File xab is 70.33 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
remote: warning: File xao is 51.68 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
remote: warning: File xat is 72.97 MB; this is larger than GitHub's recommended maximum file size of 50.00 MB
To github.com:optgeo/geojsons-euroglobalmap
   0ef455b..f3aa2da  master -> master
```

